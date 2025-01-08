
const SupplierController = require('../../controllers/supplier/SupplierController');
const VerifyToken = require('../../middlewares/VerifyToken');
const router = require('express').Router();


router.get('/supplier/get-all-nhaphang-byid', VerifyToken, SupplierController.getAllNhapHangById);
router.put('/supplier/update-status-nhaphang', SupplierController.updateStatusNhapHang);
router.put('/supplier/cancel-nhaphang', SupplierController.cancelNhapHang);


module.exports = router