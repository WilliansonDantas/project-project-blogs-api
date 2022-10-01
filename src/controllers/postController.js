const postService = require('../services/postService');

const getAllController = async (req, res) => {
  try {
  const itemCreated = await postService.getAllPost();
  return res.status(200).json(itemCreated);
  } catch (err) {
  return res.status(500).json({ message: 'Intern Erro', error: err.message });
  }
};

module.exports = {
  getAllController,
};
