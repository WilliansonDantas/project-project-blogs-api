const validationUserSchema = require('./validationUserSchema');

const blogMiddleware = (req, res, next) => {
  const validationRequired = validationUserSchema.validationUserSchema.validate(req.body);
  if (validationRequired.error) {
    return res
      .status(400)
      .json({ message: validationRequired.error.details[0].message });
  }
    next();
};

module.exports = {
  blogMiddleware,
};