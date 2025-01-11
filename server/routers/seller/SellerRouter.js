const SellerController = require('../../controllers/seller/SellerController');
const VerifyToken = require('../../middlewares/VerifyToken');
const router = require('express').Router();

router.get('/seller/getAllAccountSupplier', VerifyToken, SellerController.getAllAccountSupplier);
router.put('/seller/updateSupplierStatus', VerifyToken, SellerController.updateSupplierStatus);
router.post('/seller/createNhapHang', VerifyToken, SellerController.createNhapHang);
router.get('/seller/getAllNhapHang', SellerController.getAllNhapHang);
router.get('/seller/getStatistical-day', SellerController.getStatistical_day);
router.get('/seller/getStatistical-month', SellerController.getStatistical_month);
router.get('/seller/getApprovedSuppliers', VerifyToken, SellerController.getApprovedSuppliers);
router.get('/seller/get-confirmed-nhaphang', SellerController.getConfirmedNhapHang);
router.get('/seller/getAlldanhmuc', SellerController.getAllDanhMuc);
router.post('/seller/danhmuc', VerifyToken, SellerController.cretaeDanhmuc);
router.delete('/seller/deletedanhmuc', SellerController.deleteDanhMuc);
router.put('/seller/updateDanhMuc', SellerController.updateDanhMuc);
router.get('/seller/get-all-user', VerifyToken, SellerController.getallusers);
router.put('/seller/update-status-quyen', VerifyToken, SellerController.updateStatusQuyen)
router.delete('/seller/delete-user', VerifyToken, SellerController.deleteUser)
router.put('/seller/update-trangthai', VerifyToken, SellerController.updateStatusTaiKhoan)


module.exports = router