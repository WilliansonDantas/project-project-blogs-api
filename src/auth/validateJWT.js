const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

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
