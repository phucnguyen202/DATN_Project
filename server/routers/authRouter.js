
const AuthController = require('../controllers/AuthController');

const router = require('express').Router();

router.post('/auth/register', AuthController.register);
router.post('/auth/login', AuthController.login);

module.exports = router