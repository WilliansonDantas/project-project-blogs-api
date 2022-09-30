const express = require('express');
const CategoriesController = require('../controllers/categoriesController');
const { categoriesMiddleware } = require('../middlewares/categoriesMiddleware');
// const { validationEmail } = require('../middlewares/validationEmail');
const { jwtMiddleware } = require('../middlewares/jwtMiddleware');

const router = express.Router();

router.post('/categories', jwtMiddleware, categoriesMiddleware, 
CategoriesController.categoriesPostController);

module.exports = router;