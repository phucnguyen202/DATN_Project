const KhachHangController = require('../../controllers/khachHang/KhachHangController');
const router = require('express').Router();

router.post('/khachhang/addtocart', KhachHangController.addProductToCart);
router.get('/khachhang/getCartById', KhachHangController.getCartById);
router.put('/khachhang/updateQuantity', KhachHangController.updateQuantityProduct);
router.delete('/khachhang/deleteProductInCart', KhachHangController.deleteProductInCart);


module.exports = router