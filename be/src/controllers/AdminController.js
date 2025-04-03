const AdminService = require('../services/AdminService');
const AdminModel = require('../models/adminModel');
const bcrypt = require("bcrypt");

const createAdmin = async (req, res) => {
    try {
        const { fullName, email, phone, profilePicture } = req.body;

        if (!fullName || !email || !phone) {
            return res.status(400).json({
                status: 'ERR',
                message: 'THIEU DU LIEU DAU VAO'
            });
        }

        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            return res.status(400).json({
                status: 'ERR',
                message: 'EMAIL KHONG HOP LE'
            });
        }

        const checkPhoneNum = /^\d{10}$/;
        if (!checkPhoneNum.test(phone)) {
            return res.status(400).json({
                status: 'ERR',
                message: 'SDT KHONG HOP LE'
            });
        }

        const existingAdminEmail = await AdminModel.findOne({ email: email });
        if (existingAdminEmail) {
            return res.status(400).json({
                status: 'ERR',
                message: 'Email đã tồn tại'
            });
        }

        const password = phone;
        const username = email.split('@')[0];
        const isAdmin = true;

        const newAdmin = await AdminService.createAdmin({
            username,
            password,
            fullName,
            email,
            phone,
            isAdmin,
            profilePicture
        });

        return res.status(200).json({
            message: "Admin created successfully!",
            admin: newAdmin
        });
    } catch (e) {
        return res.status(404).json({
            message: e.message
        });
    }
};

const updateAdmin = async (req, res) => {
    try {
        const adminId = req.params.id;
        console.log("Debug: Admin ID nhận được:", adminId); // Debug
        const data = req.body;

        if (!adminId) {
            return res.status(400).json({
                status: 'ERR',
                message: 'THE ADMIN ID IS REQUIRED'
            });
        }

        const response = await AdminService.updateAdmin(adminId, data);

        return res.status(200).json({
            message: "Admin is updated successfully!",
            admin: response
        });
    } catch (e) {
        return res.status(404).json({
            message: e.message
        });
    }
};

const loginAdmin = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({
                status: 'ERR',
                message: 'THIEU DU LIEU DAU VAO'
            });
        }

        const adminLogin = await AdminService.loginAdmin({ username, password });

        return res.status(200).json({
            message: "Admin logged in successfully!",
            admin: adminLogin
        });
    } catch (e) {
        return res.status(404).json({
            message: e.message
        });
    }
};

const deleteAdmin = async (req, res) => {
    try {
        const adminId = req.params.id;

        if (!adminId) {
            return res.status(400).json({
                status: 'ERR',
                message: 'THE ADMIN ID IS REQUIRED'
            });
        }

        const response = await AdminService.deleteAdmin(adminId);

        return res.status(200).json({
            message: "Admin is deleted successfully!",
            admin: response
        });
    } catch (e) {
        return res.status(404).json({
            message: e.message
        });
    }
};

const getAllAdmin = async (req, res) => {
    try {
        const response = await AdminService.getAllAdmin();

        return res.status(200).json({
            message: "GET ALL ADMIN!",
            admin: response
        });
    } catch (e) {
        return res.status(404).json({
            message: e.message
        });
    }
};

module.exports = {
    createAdmin,
    loginAdmin,
    updateAdmin,
    deleteAdmin,
    getAllAdmin
};