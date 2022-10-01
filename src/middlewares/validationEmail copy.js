const userService = require('../services/userService');

const validationEmail = async (req, res, next) => {
  const { email } = req.body;
  const user = await userService.getUsers();
  if (user.some((emailcadastrado) => emailcadastrado.email === email)) {
    return res.status(409).json({ message: 'User already registered' });
  }
  next();
};

module.exports = {
  validationEmail,
};
