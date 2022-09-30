const Joi = require('joi');

const validationSchema = Joi.object({
  displayName: Joi.string().min(8),
  email: Joi.string().email({ minDomainSegments: 2 }),
  password: Joi.string().min(6),
  image: Joi.string(),
});

module.exports = {
  validationSchema,
};
