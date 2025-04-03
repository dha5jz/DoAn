const express = require("express");
const router = express.Router();
const adminController = require('../controllers/AdminController')

router.post('/create-admin', adminController.createAdmin)
router.post('/sign-in', adminController.loginAdmin)
router.put('/update-admin/:id', adminController.updateAdmin)
router.delete('/delete-admin/:id', adminController.deleteAdmin)
router.get('/getAll', adminController.getAllAdmin)


module.exports = router