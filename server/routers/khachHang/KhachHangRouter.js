const KhachHangController = require('../../controllers/khachHang/KhachHangController');
const VerifyToken = require('../../middlewares/VerifyToken');
const router = require('express').Router();

router.post('/khachhang/addtocart', KhachHangController.addProductToCart);
router.get('/khachhang/getCartById', KhachHangController.getCartById);
router.put('/khachhang/updateQuantity', KhachHangController.updateQuantityProduct);
router.delete('/khachhang/deleteProductInCart', KhachHangController.deleteProductInCart);
router.post('/khachhang/createOrder', KhachHangController.addProductToOrder);
router.delete('/khachhang/deleteCart', KhachHangController.deleteCart);
router.get('/khachhang/getOrderByIdUser', KhachHangController.getOrderByIdUser);
router.get('/khachhang/getDetailOrders', KhachHangController.getDetailOrders);
router.put('/khachhang/updateAddressOrder', KhachHangController.updateAddressOrder);
router.post('/khachhang/register/supplier', VerifyToken, KhachHangController.registerSupplier);
router.post('/khachhang/addProductToWishlist', KhachHangController.addProductToWishlist);
router.get('/khachhang/getWishlistProducts', VerifyToken, KhachHangController.getWishlistProducts);

module.exports = router