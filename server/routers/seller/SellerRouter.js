const SellerController = require('../../controllers/seller/SellerController');
const VerifyToken = require('../../middlewares/VerifyToken');
const router = require('express').Router();

router.get('/seller/getAllAccountSupplier', VerifyToken, SellerController.getAllAccountSupplier);
router.put('/seller/updateSupplierStatus', VerifyToken, SellerController.updateSupplierStatus);
router.post('/seller/createNhapHang', VerifyToken, SellerController.createNhapHang);
router.get('/seller/getAllNhapHang', SellerController.getAllNhapHang);
router.get('/seller/getStatistical-day', SellerController.getStatistical_day);
router.get('/seller/getStatistical-month', SellerController.getStatistical_month);


module.exports = router