const KhachHangController = require('../../controllers/khachHang/KhachHangController');
const router = require('express').Router();

router.post('/khachhang/addtocart', KhachHangController.addProductToCart);
router.get('/khachhang/getCartById', KhachHangController.getCartById);
router.put('/khachhang/updateQuantity', KhachHangController.updateQuantityProduct);
router.delete('/khachhang/deleteProductInCart', KhachHangController.deleteProductInCart);
router.post('/khachhang/createOrder', KhachHangController.addProductToOrder);
router.delete('/khachhang/deleteCart', KhachHangController.deleteCart);
router.get('/khachhang/getOrderByIdUser', KhachHangController.getOrderByIdUser);
router.put('/khachhang/updateAddressOrder', KhachHangController.updateAddressOrder);

module.exports = router