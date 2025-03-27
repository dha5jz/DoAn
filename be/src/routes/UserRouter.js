const express = require("express");
const router = express.Router();
const userController = require('../controllers/UserController')

router.post('/create-user', userController.createUser)
router.post('/sign-in', userController.loginUser)
router.put('/update-user/:studentID', userController.updateUser)
router.delete('/delete-user/:studentID', userController.deleteUser)
router.get('/getAll', userController.getAllUser)


module.exports = router