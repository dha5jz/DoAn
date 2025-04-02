const AdminModel = require("../models/adminModel");
const bcrypt = require("bcrypt");
const { generalAccessToken, generalRefreshToken } = require("./JwtService");

const createAdmin = (userData) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log("Debug: Dữ liệu nhận được để tạo admin:", userData);

            const newAdmin = new AdminModel(userData);
            console.log("Debug: Dữ liệu trước khi lưu vào MongoDB:", newAdmin);
            
            const savedAdmin = await newAdmin.save();

            console.log("Admin được tạo thành công:", savedAdmin);
            resolve(savedAdmin);
        } catch (e) {
            console.error("Lỗi khi tạo admin:", e);
            reject(e);
        }
    });
};

const loginAdmin = async ({ username, password }) => {
    try {
        const admin = await AdminModel.findOne({ username });
        if (!admin) {
            throw new Error("NGUOI DUNG KHONG TON TAI");
        }

        const isPasswordMatch = await bcrypt.compare(password, admin.password);
        if (!isPasswordMatch) {
            throw new Error("MAT KHAU KHONG DUNG");
        }

        const access_token = await generalAccessToken({
            id: admin.id,
            isAdmin: admin.isAdmin,
        });

        const refresh_token = await generalRefreshToken({
            id: admin.id,
            isAdmin: admin.isAdmin,
        });

        return { access_token, refresh_token };
    } catch (e) {
        throw e;
    }
};

const updateAdmin = async (id, data) => {
    try {
        const admin = await AdminModel.findById(id);
        if (!admin) {
            throw new Error("NGUOI DUNG KHONG TON TAI");
        }
        return await AdminModel.findByIdAndUpdate(id, data, { new: true });
    } catch (e) {
        throw e;
    }
};

const deleteAdmin = async (id) => {
    try {
        const admin = await AdminModel.findByIdAndDelete(id);
        if (!admin) {
            throw new Error("NGUOI DUNG KHONG TON TAI");
        }
        return { status: "OK", message: "delete admin success" };
    } catch (e) {
        throw e;
    }
};

const getAllAdmin = async () => {
    try {
        return await AdminModel.find();
    } catch (e) {
        throw e;
    }
};

module.exports = { createAdmin, loginAdmin, updateAdmin, deleteAdmin, getAllAdmin };
