const { User } = require('../models');

const createUser = ({ email, password }) => User.create({ email, password });

const getUsers = () => User.findAll();

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

// const { generateToken } = require('../utils/JWT');

// const authenticationService = async ({ email, password }) => {
//   const login = await User.findOne({
//     where: { email, password },
//   });
//   console.log('login', login);
//   if (login === null) {
//     const erro = ({ message: 'Invalid fields' });
//     erro.status = 400;
//     // erro.status;
//     throw erro;
//   }
//   const token = generateToken({
//     id: login.dataValues.id,
//     email: login.dataValues.email,
//     password: login.dataValues.password,
//   });
//   return { token };
// };

// module.exports = {
//   authenticationService,
// };
