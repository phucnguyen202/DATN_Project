
const PaymentController = require('../controllers/PaymentController');

const router = require('express').Router();


router.post('/payment/zalopay', PaymentController.createPaymentZaloPay);
router.post('/callback', PaymentController.funCallBack);
router.post('/payment/momo', PaymentController.createPatmentMOMO);

module.exports = router