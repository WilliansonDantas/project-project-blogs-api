// require('dotenv/config');

const jwt = require('jsonwebtoken');

// const userService = require('../services/userService');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

// const jwtconfig = {
//   expiresIn: '7d',
//   algorithm: 'HS256',
// };

const validateJWT = async (token) => {
  if (!token) {
    const e = new Error('Token not found');
    e.status = 401;
    throw e;
  }
  try {
    const instrospection = await jwt.verify(token, secret);
    return instrospection;
  } catch (e) {
    const err = new Error('Expired or invalid token');
    err.status = 401;
    throw err;
  }
};

module.exports = {
  validateJWT,
};

// const decoded = await jwt.verify(token, secret);
// if (decoded.err) {
//   return res.status(401).json({ message: 'Expired or invalid token' });
// }
// const userDecoded = await userService.getByUserId(decoded.data.userId);
// if (!userDecoded) {
//   return res.status(404).json({ message: 'User does not exist' });
// }
// req.user = userDecoded;
// next();
