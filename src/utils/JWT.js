import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import tokenDB from './db/tokenDB';
import models from '../models';

const { token } = models;

dotenv.config();

/**
 * This class contains.
 * three methods, one to help hashing password (hashPassword).
 * other the second to retrieve hashed password.
 * and the lastone for generating validToken.
 */
class TokenHelper {
  /**
   * Hashs the password.
   * @param {string} password The user's password.
   * @returns {string} The users's hashed password.
   */
  static generateResetPasswordToken({
    id, email, password, createdAt,
  }) {
    const secrect = `${password}_${createdAt}`;
    return jwt.sign({ id, email, password }, secrect, { expiresIn: 3600 });
  }

  /**
   * Hashs the password.
   * @param {string} validToken The user's validToken.
   * @param {string} secrectKey The secret key.
   * @returns {string} The users's hashed password.
   */
  static decodedToken(validToken, secrectKey) {
    const isToken = jwt.verify(validToken, secrectKey);
    return isToken;
  }

  /**
   * Hashs the password for signup and login response.
   * @param {integer} id The user's id.
   * @param {string} username The user's username.
   * @param {string} email The user's email.
   * @param {string} role The user's role.
   * @param {string} isVerified The user's isVerified.
   * @returns {string} The users's hashed password.
   */
  static async generateToken(id, username, email, role, isVerified) {
    const userTokenExists = await token.findOne({ where: { user_id: id } });
    if (userTokenExists) {
      return userTokenExists.value;
    }
    const generatedToken = jwt.sign({
      id, username, email, role, isVerified
    }, process.env.SECRET_KEY);
    tokenDB.saveToken(generatedToken, id);
    return generatedToken;
  }
}
export default TokenHelper
