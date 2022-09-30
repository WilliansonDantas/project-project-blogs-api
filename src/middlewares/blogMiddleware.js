const schemas = require('./schemas');

const blogMiddleware = (req, res, next) => {
  const validationRequired = schemas.validationSchema.validate(req.body);
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