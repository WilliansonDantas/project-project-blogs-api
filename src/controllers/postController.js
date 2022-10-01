const postService = require('../services/postService');

const getAllController = async (req, res) => {
  try {
  const itemCreated = await postService.getAllPost();
  return res.status(200).json(itemCreated);
  } catch (err) {
  return res.status(500).json({ message: 'Intern Erro', error: err.message });
  }
};

const getIdController = async (req, res) => {
  try {
  const { id } = req.params;
  console.log(id);
  const itemId = await postService.getIdPost(id);
  console.log(itemId);
  if (!itemId) {
    return res.status(404).json({ message: 'Post does not exist' });
    }
  return res.status(200).json(itemId);
  } catch (err) {
  return res.status(500).json({ message: 'Intern Erro', error: err.message });
  }
};

module.exports = {
  getAllController,
  getIdController,
};
