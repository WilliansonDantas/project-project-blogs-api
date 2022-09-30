// const jwt = require('jsonwebtoken');
const validateJWT = require('../auth/validateJWT');
// const userService = require('../services/userService');

// const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const jwtMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  // const decoded = await jwt.verify(token, secret);
  // const userDecoded = await userService.getByUserId(decoded.data.userId);
  const payload = await validateJWT.validateJWT(token);
  if (!payload) {
    const err = new Error('error reading JWT');
    err.status = 401;
    throw err;
  }
  // if (!userDecoded) {
  //   const err = new Error('User does not exist');
  //   err.status = 404;
  //   throw err;
  // }
  next();
};

module.exports = {
  jwtMiddleware,
};

// const decoded = await jwt.verify(token, secret);
// if (decoded.err) {
//   return res.status(401).json({ message: 'Expired or invalid token' });
// }
// const userDecoded = await userService.getByUserId(decoded.data.userId);
// if (!userDecoded) {
//   return res.status(404).json({ message: 'User does not exist' });
// }