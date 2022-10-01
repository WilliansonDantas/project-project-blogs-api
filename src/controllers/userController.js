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

const userPostController = async (req, res) => {
  try {
    const itemCreated = await userService.createUser(req.body);
    const jwtconfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };
    const tokenCreated = jwt.sign({ data: { userId: itemCreated.id } }, secret, jwtconfig);
    return res.status(201).json({ token: tokenCreated });
  } catch (err) {
    return res.status(500).json({ message: 'Intern Erro', error: err.message });
  }
};

const userGetAllController = async (req, res) => {
  try {
    const usersAll = await userService.getUsers();
    return res.status(200).json(usersAll);
  } catch (err) {
    return res.status(500).json({ message: 'Intern Erro', error: err.message });
  }
};

const userGetIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = await userService.getByUserId(id);
    if (!userId) {
    return res.status(404).json({ message: 'User does not exist' });
    }
    return res.status(200).json(userId);
  } catch (err) {
    return res.status(500).json({ message: 'Intern Erro', error: err.message });
  }
};

module.exports = {
    authenticationController,
    userPostController,
    userGetAllController,
    userGetIdController,
};
