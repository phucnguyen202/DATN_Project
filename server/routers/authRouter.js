
const AuthController = require('../controllers/AuthController');
const VerifyToken = require('../middlewares/VerifyToken');
const router = require('express').Router();


router.post('/auth/register', AuthController.register);
router.post('/auth/login', AuthController.login);
router.post('/auth/loginWithGoogle', AuthController.loginWithGoogle);
router.post('/auth/updateinfo', AuthController.updateInfo);
router.get('/auth/finduserbyid', AuthController.findUserById);
router.post('/auth/verify-email', VerifyToken, AuthController.verifyEmail);

module.exports = router