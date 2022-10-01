const Joi = require('joi');

const validationPostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.string().required(),
});

module.exports = {
  validationPostSchema,
};
