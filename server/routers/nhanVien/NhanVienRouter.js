const NhanVienController = require('../../controllers/nhanVien/NhanVienController');

const router = require('express').Router();

router.post('/nhanvien/createProduct', NhanVienController.createProduct);
router.get('/nhanvien/getproduct', NhanVienController.getProducts);
router.delete('/nhanvien/deleteproduct', NhanVienController.deleteProduct);
router.put('/nhanvien/updateproduct', NhanVienController.updateProduct);
router.get('/nhanvien/getallproducts', NhanVienController.getAllProducts);
router.get('/nhanvien/getproductbyid', NhanVienController.getProductById);

module.exports = router