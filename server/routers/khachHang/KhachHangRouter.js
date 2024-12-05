const KhachHangController = require('../../controllers/khachHang/KhachHangController');
const router = require('express').Router();

router.post('/khachhang/addtocart', KhachHangController.addProductToCart);
router.get('/khachhang/getCartById', KhachHangController.getCartById);


module.exports = router