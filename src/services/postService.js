const { BlogPost, User, Category } = require('../models');

// const createPost = ({ title, content, categoryIds }) => BlogPost
// .create({ title, content, categoryIds });

const getAllPost = () => BlogPost.findAll({
  include: [
  {
    model: User,
    as: 'user',
    attributes: { exclude: ['password'] },
  },
  {
    model: Category,
    as: 'categories',
  },
  
] });

const getIdPost = (userId) => BlogPost.findByPk(userId, 
  { include: [
  {
    model: User,
    as: 'user',
    attributes: { exclude: ['password'] },
  },
  {
    model: Category,
    as: 'categories',
  },
] });

module.exports = {
  getAllPost,
  getIdPost,
};
