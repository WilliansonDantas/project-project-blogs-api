require('dotenv/config');

const jwt = require('jsonwebtoken');

const userService = require('../services/userService');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const isBodyValid = (email, password) => email && password;

const authenticationController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!isBodyValid(email, password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const user = await userService.getByEmailAndPassword(req.body);
    if (user.email !== email || user.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
    const jwtconfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };
    const token = jwt.sign({ data: { userId: user.id } }, secret, jwtconfig);
    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Intern Erro', error: err.message });
  }
};

// const authenticationLoginService = require('../services/userService');

// const authenticationController = async (req, res) => {
//     // const { email, password } = req.body;
//     // console.log('email', email);
//     // console.log('senha', password);
//     const token = await authenticationLoginService.authenticationService(req.body);
//     return res.status(200).json(token);
// };

module.exports = {
    authenticationController,
};
