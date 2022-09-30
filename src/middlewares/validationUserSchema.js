const Joi = require('joi');

const validationUserSchema = Joi.object({
  displayName: Joi.string().min(8),
  email: Joi.string().email({ minDomainSegments: 2 }),
  password: Joi.string().min(6),
  image: Joi.string(),
});

module.exports = {
  validationUserSchema,
};
