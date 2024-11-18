
const AdminController = require('../../controllers/admin/AdminController');
const VerifyToken = require('../../middlewares/VerifyToken');

const router = require('express').Router();


router.get('/admin/user', VerifyToken, AdminController.getallusers);
router.get('/getAlldanhmuc', AdminController.getAllDanhMuc);
router.post('/admin/danhmuc', VerifyToken, AdminController.cretaeDanhmuc);


module.exports = router