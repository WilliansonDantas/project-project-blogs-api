const Joi = require('joi');

const validationCategoriesSchema = Joi.object({
  name: Joi.string().required(),
});

module.exports = {
  validationCategoriesSchema,
};
