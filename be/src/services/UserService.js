const UserModel = require("../models/studentModel");
const AdminModel = require("../models/adminModel");

const bcrypt = require("bcrypt");
const { generalAccessToken, generalRefreshToken } = require("./JwtService");
const { use } = require("react");
const studentModel = require("../models/studentModel");
const createUser = (userData) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(" Debug: Dữ liệu nhận được để tạo user:", userData);

            const newUser = new UserModel(userData);
            const savedUser = await newUser.save(); // Lưu user vào MongoDB

            console.log("User được tạo thành công:", savedUser);
            resolve(savedUser);
        } catch (e) {
            console.error("Lỗi khi tạo user:", e);
            reject(e);
        }
    });
};
const loginUser = ({username, password}) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(" Debug: Dữ liệu nhận được để đăng nhập:", {username, password});

            
            // Tìm người dùng theo username
            const userLogin = await UserModel.findOne({ username: username });
            const adminLogin = await AdminModel.findOne({username: username});
            let user = userLogin || adminLogin; 
            // Kiểm tra người dùng tồn tại
            if (!user) {
                throw new Error("NGUOI DUNG KHONG TON TAI");
            }

            // So sánh mật khẩu
            const isPasswordMatch = await bcrypt.compare(password, user.password);

            // Kiểm tra mật khẩu khớp
            if (!isPasswordMatch) {
                throw new Error("MAT KHAU KHONG DUNG");
            }
            
            const  access_token =await generalAccessToken({
                id: user.id,
                isAdmin: user.isAdmin,
            })

            const refresh_token = await generalRefreshToken({
                id: user.id,
                isAdmin: user.isAdmin,
            })
            console.log(access_token);
            console.log("Đăng nhập thành công:", user);
            resolve({
                 access_token, refresh_token
            });
        } catch (e) {
            console.error("Đăng nhập thất bại", e);
            reject(e);
        }
    });
};

const updateUser = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(" Debug: Dữ liệu nhận được để cập nhật id:", id);
            console.log(" Debug: Dữ liệu nhận được để cập nhật data:", data);

            
            // Tìm người dùng theo id
            const check = await studentModel.findOne({studentID: id });
            console.log("Hoc sinh can duoc cap nhat:", check);

            // Kiểm tra người dùng tồn tại
            if (!check) {
                throw new Error("NGUOI DUNG KHONG TON TAI");
            }

            const updatedUser = await studentModel.findOneAndUpdate(
                { studentID: id }, // Tìm theo studentID
                data,
                { new: true }
            );
            
            console.log("Cập nhật thông tin thành công", updateUser);
            resolve({
                use: updatedUser
            });
        } catch (e) {
            console.error("Cập nhật thông tin thất bại", e);
            reject(e);
        }
    });
};

const deleteUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(" Debug: Dữ liệu nhận được để cập nhật id:", id);
          
            // Tìm người dùng theo id
            const check = await studentModel.findOne({studentID: id });
            console.log("Hoc sinh can duoc xoa:", check);

            // Kiểm tra người dùng tồn tại
            if (!check) {
                throw new Error("NGUOI DUNG KHONG TON TAI");
            }

            await studentModel.findOneAndDelete(
                { studentID: id }
            );
            
            resolve({
                status: 'OK',
                message: 'delete user success'
            });
        } catch (e) {
            console.error("XOA HOC SINH THAT BAI", e);
            reject(e);
        }
    });
};

const getAllUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
          
            const allUser = await studentModel.find();
           
            resolve({
                status: 'OK',
                message: 'get all user success',
                data: allUser
            });
        } catch (e) {
            console.error("GET HOC SINH THAT BAI", e);
            reject(e);
        }
    });
};
module.exports = { createUser, loginUser, updateUser, deleteUser, getAllUser };
