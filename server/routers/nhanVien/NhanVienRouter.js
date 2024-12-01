const NhanVienController = require('../../controllers/nhanVien/NhanVienController');


const router = require('express').Router();

router.post('/nhanvien/createProduct', NhanVienController.createProduct);


module.exports = router