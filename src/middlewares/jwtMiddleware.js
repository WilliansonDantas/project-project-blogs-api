const validateJWT = require('../auth/validateJWT');

const jwtMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  const payload = await validateJWT.validateJWT(token);
  if (!payload) {
    const err = new Error('error reading JWT');
    err.status = 401;
    throw err;
  }
  next();
};

module.exports = {
  jwtMiddleware,
};
