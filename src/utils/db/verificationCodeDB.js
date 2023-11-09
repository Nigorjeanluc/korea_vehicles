import { Op } from 'sequelize'
import models from '../../models';

const { verification_code } = models;

/**
 * class to deal with all needed operations
 * on the token table
 */
class VerificationCode {
  /**
   * find token into table in the DB
   * @param {string} validCode confirmation verification_code
   * @param {integer} user_id user Id
   * @returns {string} The users's token.
   */
  static async findCode(validCode, user_id) {
    const savedCode = await verification_code.findOne({
      where: {
        [Op.and]: [
          { value: String(validCode) },
          { user_id }
        ]
      },
      order: [['createdAt', 'DESC']]
    });
    return savedCode;
  }

  /**
   * insert generatyed verification_code into table in the DB.
   * @param {string} validCode The verification_code for user.
   * @param {integer} user_id The user id.
   * @returns {string} The users's verification_code.
   */
  static async saveCode(validCode, user_id) {
    const validationCode = await verification_code.create({
      value: validCode,
      user_id,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fields: [
        'id', 'value', 'user_id', 'createdAt', 'updatedAt'
      ]
    });

    return validationCode;
  }

  /**
   * delete token from validtoken table in the DB.
   * @param {string} validCode The request sent by a user.
   * @param {integer} user_id The user id.
   * @returns {string} The users's token.
   */
  static async deleteValidCode(validCode, user_id) {
    await verification_code.destroy({ where: { value: String(validCode), user_id } });
  }
}

export default VerificationCode
