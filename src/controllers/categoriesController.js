const categoriesService = require('../services/categoriesService');

const categoriesPostController = async (req, res) => {
  try {
    const itemCreated = await categoriesService.createCategorie(req.body);
    return res.status(201).json(itemCreated);
  } catch (err) {
    return res.status(500).json({ message: 'Intern Erro', error: err.message });
  }
};

module.exports = {
    categoriesPostController,
};
