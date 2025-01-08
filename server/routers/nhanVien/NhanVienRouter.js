const NhanVienController = require('../../controllers/nhanVien/NhanVienController');

const router = require('express').Router();

router.post('/nhanvien/createProduct', NhanVienController.createProduct);
router.get('/nhanvien/getproduct', NhanVienController.getProducts);
router.delete('/nhanvien/deleteproduct', NhanVienController.deleteProduct);
router.put('/nhanvien/updateproduct', NhanVienController.updateProduct);
router.get('/nhanvien/getallproducts', NhanVienController.getAllProducts);
router.get('/nhanvien/getproductbyid', NhanVienController.getProductById);
router.get('/nhanvien/getAllOrder', NhanVienController.getAllOrder);
router.put('/nhanvien/updateOrderStatus', NhanVienController.updateOrderStatus);
router.post('/nhanvien/confirm-nhaphang', NhanVienController.confirmNhapHang);



module.exports = router