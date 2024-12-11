
const AuthController = require('../controllers/AuthController');
const router = require('express').Router();


router.post('/auth/register', AuthController.register);
router.post('/auth/login', AuthController.login);
router.post('/auth/loginWithGoogle', AuthController.loginWithGoogle);
router.post('/auth/updateinfo', AuthController.updateInfo);
router.get('/auth/finduserbyid', AuthController.findUserById);

module.exports = router