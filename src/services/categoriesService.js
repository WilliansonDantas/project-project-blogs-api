const { Category } = require('../models');

const createCategorie = ({ name }) => Category.create({ name });

const getCategories = () => Category.findAll();

module.exports = {
  createCategorie,
  getCategories,
};
