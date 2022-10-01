const express = require('express');
const PostController = require('../controllers/postController');
// const { validationPostSchema } = require('../middlewares/validationPostSchema');
const { jwtMiddleware } = require('../middlewares/jwtMiddleware');

const router = express.Router();

router.get('/post', jwtMiddleware, PostController.getAllController);

router.get('/post/:id', jwtMiddleware, PostController.getIdController);

module.exports = router;