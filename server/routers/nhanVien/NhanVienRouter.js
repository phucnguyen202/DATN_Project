const NhanVienController = require('../../controllers/nhanVien/NhanVienController');


const router = require('express').Router();

router.post('/nhanvien/createProduct', NhanVienController.createProduct);
router.get('/nhanvien/getallproduct', NhanVienController.getAllProducts);

module.exports = router