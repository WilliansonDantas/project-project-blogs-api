require('dotenv/config');

const jwt = require('jsonwebtoken');

const userService = require('../services/userService');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const validateJWT = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }
  try {
    const decoded = jwt.verify(token, secret);
    const user = await userService.getByUserId(decoded.data.userId);
    if (!user) {
      return res.status(401).json({ message: 'User não encontrado' });
    }
    req.user = user;
    next();
  } catch (err) {
    return res.status(500).json({ message: 'Intern Erro', error: err.message });
  }
};

module.exports = {
  validateJWT,
};
