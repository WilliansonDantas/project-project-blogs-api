const express = require('express');
const CategoriesController = require('../controllers/categoriesController');
const { categoriesMiddleware } = require('../middlewares/categoriesMiddleware');
const { jwtMiddleware } = require('../middlewares/jwtMiddleware');

const router = express.Router();

router.post('/categories', jwtMiddleware, categoriesMiddleware, 
CategoriesController.categoriesPostController);
router.get('/categories', jwtMiddleware, CategoriesController.categoriesGetAllController);

module.exports = router;