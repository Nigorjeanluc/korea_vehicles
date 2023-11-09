import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import models from '../models';

const {
  user,
  token
} = models;

dotenv.config();

const tokenValidation = async (req, res, next) => {
  try {
    const verify = jwt.verify(req.header('token'), process.env.SECRET_KEY);
    const userExists = await user.findOne({
      where: { email: verify.email }
    });
    const tokenExists = await token.findOne({
      where: { value: req.header('token') }
    });

    if (userExists) {
      if (tokenExists) {
        req.user = userExists;
        return next();
      }
      return res.status(401).json({ status: 401, error: 'Already logged out. Sign in and try again.' });
    }
    return res.status(401).json({ status: 401, error: 'User not recognised. Please create account and try again.' });
  } catch (error) {
    return res.status(400).json({ status: 400, error: 'Malformed/ Incorrect security token ! Check token and try again.' });
  }
};

export default tokenValidation;
