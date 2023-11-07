import Joi from 'joi';

const joiMessageFunction = (error, req, res, next) => {
  if (error) {
    const { details } = error;
    const message = {};
    details.forEach((d) => {
      message[d.context.key] = d.message;
    });
    return res.status(400).json({ status: 400, error: message });
  }
  return next();
};
const signUp = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.required().messages({ 'string.required': 'name is required', 'string.base': 'Invalid type, your name must be a string', 'string.empty': 'Please enter your name' }).string(),
    phoneNumber: Joi.required().messages({ 'string.required': 'phone number is required', 'string.base': 'Invalid type, your phone number must be a string', 'string.empty': 'Please enter your phone number' }).string(),
    username: Joi.required().messages({ 'string.required': 'username is required', 'string.base': 'Invalid type, your username must be a string', 'string.empty': 'Please enter your username' }).min(4).max(20),
    email: Joi.required().messages({ 'string.base': 'Invalid type, your email must be a string', 'string.empty': 'Please enter your email', 'string.email': 'Your email is invalid, please enter a valid email' }).email(),
    password: Joi.required().messages({ 'string.base': 'Invalid type, your password must be a string', 'string.min': 'password must be at least 8 characters long', 'string.empty': 'Please enter your password' }).string()
      .pattern(/^[a-zA-Z0-9]{3,30}$/)
      .min(8)
      .max(50),
  });
  const { error } = schema.validate(req.body, {
    abortEarly: false
  });
  return joiMessageFunction(error, req, res, next);
};
const signIn = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.required().messages({ 'string.required': 'email is required', 'string.base': 'Invalid type, your email must be a string', 'string.empty': 'Please enter your email' }),
    password: Joi.required().messages({ 'string.required': 'Password is required', 'string.empty': 'Please enter your password' })
  });
  const { error } = schema.validate(req.body, {
    abortEarly: false
  });
  return joiMessageFunction(error, req, res, next);
};

export {
  signUp,
  signIn,
}
