/**
 * @param {Object} schema 
 * @returns {Function} 
 */

const validate = (schema) => (req, res, next) => {
  try {

    const validatedData = schema.parse(req.body);
    req.body = validatedData;
    next();
  } catch (error) {

    const formattedErrors = error.errors?.map(err => ({
      path: err.path.join('.'),
      message: err.message
    })) || [{ message: 'Validation failed' }];

    return res.status(400).json({
      success: false,
      errors: formattedErrors
    });
  }
};

module.exports = validate; 