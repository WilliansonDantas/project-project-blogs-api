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

// const getByEmail = (email) => User.findOne(email);

// const getByEmailAndPassword = ({ email, password }) => User.findOne({ email, password });

module.exports = {
  getAllPost,
};

// Referência 01: Vídeo Danilo JWT
// link: https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/live-lectures/fe789209-f305-4da7-8fe5-1162b7fb1fbe/recording/9d7d32c4-43fb-470c-9394-eefb8248fc87
