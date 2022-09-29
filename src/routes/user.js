const express = require('express');
const authenticationControllerLogin = require('../controllers/userController');
// const validadedEmail = require('../middlewares/validadedEmail');
// const validadedPassword = require('../middlewares/validadedPassword');

const router = express.Router();

router.post('/', authenticationControllerLogin.authenticationController);

module.exports = router;