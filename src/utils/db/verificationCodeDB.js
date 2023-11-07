import models from '../../models';

const { code } = models;

/**
 * class to deal with all needed operations
 * on the token table
 */
class CodeDB {
  /**
   * find token into table in the DB
   * @param {string} validCode confirmation code
   * @param {integer} user_id user Id
   * @returns {string} The users's token.
   */
  static async findCode(validCode, user_id) {
    const savedCode = await code.findOne({
      where: { value: validCode, user_id }, order: [['created_at', 'DESC']]
    });
    return savedCode;
  }

  /**
   * insert generatyed code into table in the DB.
   * @param {string} validCode The code for user.
   * @param {integer} user_id The user id.
   * @returns {string} The users's code.
   */
  static async saveCode(validCode, user_id) {
    const validationCode = await code.create({
      user_id,
      value: validCode,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      fields: [
        'id', 'user_id', 'value', 'create_at', 'updated_at'
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
    await code.destroy({ where: { value: validCode, user_id } });
  }
}

export default CodeDB
