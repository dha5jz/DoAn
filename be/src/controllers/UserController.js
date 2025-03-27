const UserService = require('../services/UserService')
const UserModel = require('../models/studentModel'); 
const bcrypt = require("bcrypt");
const createUser =async (req, res) =>{
    try{
        const { fullName, dob, grade, address, phone, parentName, parentPhone, profilePicture, CCCD } = req.body;

        const checkPhoneNum = /^\d{10}$/;
        // Kiểm tra thiếu dữ liệu
        if ( !fullName || !dob || !grade || !address || !phone || !parentName || !parentPhone || !profilePicture || !CCCD) {
            return res.status(400 ).json({
                status: 'ERR',
                message: 'THIEU DU LIEU DAU VAO'
            });
        }

        // Kiểm tra số điện thoại hợp lệ
        if (!checkPhoneNum.test(phone)) {
            return res.status(400).json({
                status: 'ERR',
                message: 'SDT KHONG HOP LE'
            });
        }

        if (!checkPhoneNum.test(parentPhone)) {
            return res.status(400).json({
                status: 'ERR',
                message: 'SDT PHU HUYNH KHONG HOP LE'
            });
        }
        // Kiểm tra CCCD trùng lặp
        const existingStudent = await UserModel.findOne({ CCCD: CCCD });
        if (existingStudent) {
            return res.status(400).json({
                status: 'ERR',
                message: 'CCCD đã tồn tại'
            });
        }
// tự sinh ID
         // Xác định năm vào học từ lớp (vd: lớp 10 -> 2024)
         const currentYear = new Date().getFullYear(); // Lấy năm hiện tại
         const startYear = currentYear - (parseInt(grade) - 10) -1; // Xác định năm vào học

        // Lấy studentID mới nhất trong cùng năm vào học
        const lastStudent = await UserModel.findOne({ studentID: new RegExp(`^${startYear}`) }).sort({ studentID: -1 });

        let studentID;
        if(lastStudent){
            //tang so thu tu len 1
            const lastIDNum = parseInt(lastStudent.studentID.slice(-3)); //layba so cuoi
            studentID = `${startYear}${String(lastIDNum + 1).padStart(3,'0')}`;

        } else{
            studentID = `${startYear}001`;
        }

//tự sinh username
        //loai dấu
        const removeDiacritics = (str) => {
            return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        };
        const lastname = removeDiacritics(fullName.trim().split(' ').pop().toLowerCase());
        const username = `${lastname}${studentID}`;

// tự sinh password
        const password = CCCD;

// tự mặc định học sinh 
        const isAdmin = false;

//tạo người dùng mới
        const newStudent = await UserService.createUser({
            studentID,
            username,
            password,
            fullName,
            dob,
            grade,
            address,
            phone,
            parentName,
            parentPhone,
            isAdmin,
            profilePicture,
            CCCD
        });

        
        return res.status(200).json({
            message: "User created successfully!",
            user: newStudent
        });
    }catch(e){
        return res.status(404).json({
            message: e.message
        })
    }
}

const loginUser =async (req, res) =>{
    try{
        const { username, password } = req.body;

        // Kiểm tra thiếu dữ liệu
        if ( !username || !password) {
            return res.status(400 ).json({
                status: 'ERR',
                message: 'THIEU DU LIEU DAU VAO'
            });
        }       

        const userLogin = await UserService.loginUser({username, password});
        
        return res.status(200).json({
            message: "User logined successfully!",
            user: userLogin
        });
    }catch(e){
        return res.status(404).json({
            message: e.message
        })
    }
}

const updateUser =async (req, res) =>{
    try{
        const userId = req.params.studentID;   
        console.log('usedId: ', userId)
        const data = req.body
        console.log('data nhan vao: ', data)
        if ( !userId) {
            return res.status(400 ).json({
                status: 'ERR',
                message: 'THE USERID IS REQUIRED'
            });
        }   
        const response = await UserService.updateUser(userId, data)
       
        return res.status(200).json({
            message: "User is updated successfully!",
            user: response

        });
    }catch(e){
        return res.status(404).json({
            message: e.message
        })
    }
}

const deleteUser =async (req, res) =>{
    try{
        const userId = req.params.studentID;   
        console.log('usedId: ', userId)
        if ( !userId) {
            return res.status(400 ).json({
                status: 'ERR',
                message: 'THE USERID IS REQUIRED'
            });
        }   
        const response = await UserService.deleteUser(userId)
       
        return res.status(200).json({
            message: "User is deleted successfully!",
            user: response

        });
    }catch(e){
        return res.status(404).json({
            message: e.message
        })
    }
}

const getAllUser =async (req, res) =>{
    try{
        
        const response = await UserService.getAllUser()
       
        return res.status(200).json({
            message: "GET ALL USER!",
            user: response
        });
    }catch(e){
        return res.status(404).json({
            message: e.message
        })
    }
}
module.exports = {
    createUser,
    loginUser,
    updateUser,
    deleteUser,
    getAllUser
}