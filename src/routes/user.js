const express = require('express');
const UserController = require('../controllers/userController');
const { blogMiddleware } = require('../middlewares/blogMiddleware');
const { validationEmail } = require('../middlewares/validationEmail');
const { jwtMiddleware } = require('../middlewares/jwtMiddleware');

const router = express.Router();

router.post('/login', UserController.authenticationController);
router.post('/user', blogMiddleware, validationEmail, UserController.userPostController);
router.get('/user', jwtMiddleware, UserController.userGetAllController);
router.get('/user/:id', jwtMiddleware, UserController.userGetIdController);

module.exports = router;