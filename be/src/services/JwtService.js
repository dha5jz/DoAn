const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const generalAccessToken = async (payload) => {
    try {
        console.log('payload', payload);
        const access_token = jwt.sign({payload},process.env.ACCESS_TOKEN,  { expiresIn: '' });s
        return access_token;
    } catch (error) {
        console.error('Lỗi khi tạo access token:', error);
        return null; // Hoặc ném lỗi, tùy thuộc vào yêu cầu của bạn
    }
};

const generalRefreshToken = async (payload) => {
    try {
        const refresh_token = jwt.sign({payload},process.env.REFRESH_TOKEN,  { expiresIn: '365d' });
        return refresh_token;
    } catch (error) {
        console.error('Lỗi khi tạo refresh token:', error);
        return null; // Hoặc ném lỗi, tùy thuộc vào yêu cầu của bạn
    }
};
module.exports = {
    generalAccessToken,
    generalRefreshToken
};