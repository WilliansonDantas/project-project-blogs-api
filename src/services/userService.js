const { User } = require('../models');

const createUser = ({ email, password, displayName }) => User
.create({ email, password, displayName });

const getUsers = () => User.findAll({ attributes: { exclude: ['password'] } });

const getByEmail = (email) => User.findOne(email);

const getByEmailAndPassword = ({ email, password }) => User.findOne({ email, password });

const getByUserId = (userId) => User.findByPk(userId);

module.exports = {
  createUser,
  getUsers,
  getByEmail,
  getByEmailAndPassword,
  getByUserId,
};

// Referência 01: Vídeo Danilo JWT
// link: https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/live-lectures/fe789209-f305-4da7-8fe5-1162b7fb1fbe/recording/9d7d32c4-43fb-470c-9394-eefb8248fc87
