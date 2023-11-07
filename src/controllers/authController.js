import userDB from '../utils/db/userDB';
import tokenDB from '../utils/db/tokenDB';
import PasswordHasher from '../utils/passwordHasher';
import JWT from '../utils/JWT';
import verificationCodeDB from '../utils/db/verificationCodeDB';

/**
 * This class contains all methods
 * required to handle
 * signup and login and logout endpoints' request.
 */
class AuthController {
  /**
   * This method handle the signup request.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @returns {object} The status and some data of the user.
   */
  static async signUp(req, res) {
    const emailExists = await userDB.findUser('email', req.body.email);
    const usernameExists = await userDB.findUser('username', req.body.username);

    if (emailExists || usernameExists) {
      return res.status(409).json({
        status: 409,
        error: 'This user already exists, use another email or username'
      });
    }
    req.body.isVerified = false;
    const savedUser = await userDB.saveUser(req.body);
    const {
      fullname, username, email, gender, role
    } = req.body;
    const data = {
      fullname, username, email, gender, role
    };

    await verificationCodeDB.saveCode(req.userCode, savedUser.id);
    return res.status(201).json({
      status: 201,
      message: 'User was created successfully, Enter the the confirmation code sent to you.',
      data
    });
  }
}

export default AuthController
