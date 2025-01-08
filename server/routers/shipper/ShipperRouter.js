const ShipperController = require('../../controllers/shipper/ShipperController');
const VerifyToken = require('../../middlewares/VerifyToken');
const router = require('express').Router();

router.put('/shipper/update-delivery-status', ShipperController.updateStatus_GiaoHang);
router.get('/shipper/get-undelivered-orders', ShipperController.getUndeliveredOrders);

module.exports = router