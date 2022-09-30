const validationCategoriesSchema = require('./validationCategoriesSchema');

const categoriesMiddleware = (req, res, next) => {
  const validationRequired = validationCategoriesSchema.validationCategoriesSchema
  .validate(req.body);
  if (validationRequired.error) {
    return res
      .status(400)
      .json({ message: validationRequired.error.details[0].message });
  }
    next();
};

module.exports = {
  categoriesMiddleware,
};