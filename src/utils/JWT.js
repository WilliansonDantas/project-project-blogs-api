// const jwt = require('jsonwebtoken');

// const jwtconfig = {
//   expiresIn: '7d',
//   algorithm: 'HS256',
// };

// const { JWT_SECRET } = process.env; 
// console.log(JWT_SECRET);

// const generateToken = (payload) => 
// jwt.sign(payload, JWT_SECRET, jwtconfig);

// const tokenValidation = async (token) => {
//   if (!token) {
//     const e = Error({ message: 'Some required fields are missing' });
//     e.status = 400;
//     throw e.message;
//   }

//   try {
//     const instrospection = await jwt.verify(token, JWT_SECRET);
//     return instrospection;
//   } catch (e) {
//     const erro = new Error({ message: 'Invalid fields' });
//     erro.status = 400;
//     throw erro;
//   }
// };

// module.exports = {
//   generateToken,
//   tokenValidation,
// };