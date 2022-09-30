const express = require('express');
const UserController = require('../controllers/userController');
// const { validateJWT } = require('../auth/validateJWT');
const { blogMiddleware } = require('../middlewares/blogMiddleware');
const { validationEmail } = require('../middlewares/validationEmail');

const router = express.Router();

router.post('/login', UserController.authenticationController);
router.post('/user', blogMiddleware, validationEmail, 
UserController.userPostController);

module.exports = router;