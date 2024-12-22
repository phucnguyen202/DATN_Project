const SellerController = require('../../controllers/seller/SellerController');
const VerifyToken = require('../../middlewares/VerifyToken');
const router = require('express').Router();

router.get('/seller/getAllAccountSupplier', VerifyToken, SellerController.getAllAccountSupplier);
router.put('/seller/updateSupplierStatus', VerifyToken, SellerController.updateSupplierStatus)

module.exports = router