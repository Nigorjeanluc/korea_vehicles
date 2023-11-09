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

    if (emailExists) {
      return res.status(409).json({
        status: 409,
        error: 'This user already exists, use another email'
      })
    }

    if (usernameExists) {
      return res.status(409).json({
        status: 409,
        error: 'This user already exists, use another username'
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

  /**
   * This method handle the signup request.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @returns {object} The status and some data of the user.
   */
  static async confirmation(req, res) {
    const checkConfirmation = await userDB.findUser('username', req.params.username);
    if (!checkConfirmation) {
      return res.status(404).json({
        status: 404,
        error: 'User not founded'
      });
    }

    const validCode = await verificationCodeDB.findCode(req.body.code, checkConfirmation.id);
    if (!validCode) {
      return res.status(422).json({
        status: 422,
        error: 'Please enter a valid code'
      });
    }

    const result = await userDB.confirm(req.params.username);
    if (result) {
      await verificationCodeDB.deleteValidCode(req.body.code, checkConfirmation.id);
      const user = await userDB.findUser('username', req.params.username);
      const token = await JWT.generateToken(
        user.id,
        user.username,
        user.email,
        user.role,
        user.isVerified
      );
      return res.status(200).json({
        status: 200,
        message: 'Email has successfully been verified',
        token
      });
    }
  }

  /**
   * This method handle the sign request.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @returns {object} The status and some data of the user.
   */
  static async signIn(req, res) {
    const emailExists = await userDB.findUser('email', req.body.email);

    if (emailExists) {
      if (emailExists.isVerified === false) {
        return res.status(401).json({
          status: 401,
          error: 'Please confirm your email before logging in!'
        });
      }

      const passwordExist = await PasswordHasher.checkPassword(req.body.password, emailExists.password);

      if (passwordExist) {
        const token = await JWT.generateToken(
          emailExists.id,
          emailExists.username,
          emailExists.email,
          emailExists.role,
          emailExists.isVerified
        );
        await tokenDB.saveToken(token);
        return res.status(201).json({
          status: 201,
          message: 'User has successfully logged in',
          data: {
            token,
            data: {
              profileImg: emailExists.profileImg,
              name: emailExists.name,
              username: emailExists.username,
              email: emailExists.email,
              coverImg: emailExists.coverImg,
              phoneNumber: emailExists.phoneNumber,
              password: emailExists.password,
              role: emailExists.role
            }
          }
        });
      }
    }

    return res.status(401).json({
      status: 401,
      error: 'Invalid credentials'
    });
  }

  /**
   * This method handle the logout endpoint.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @returns {object} The status and message.
   * */
  static async logout(req, res) {
    await tokenDB.deleteValidToken(req.header('token'));
    return res.status(200).json({
      status: 200,
      message: `${req.user.username} successfully signed out.`
    });
  }
}

export default AuthController
