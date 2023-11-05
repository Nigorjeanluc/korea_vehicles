import models from '../models';

const { token } = models;

/**
 * class to deal with all needed operations
 * on the token table
 */
class TokenDB {
  /**
   * find token into table in the DB
   * @param {string} jwtToken
   * @returns {string} The users's token.
   */
  static async findToken(jwtToken) {
    await Token.findOne({
      where: { value: jwtToken }
    });
  }

  /**
   * insert generatyed token into table in the DB.
   * @param {string} jwtToken The token for user.
   * @param {integer} userId The user id.
   * @returns {string} The users's token.
   */
  static async saveToken(jwtToken, userId) {
    await Token.create({
      value: jwtToken,
      userId,
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }

  /**
   * delete token from validtoken table in the DB.
   * @param {string} jwtToken The request sent by a user.
   * @returns {string} The users's token.
   */
  static async deleteValidToken(jwtToken) {
    await Token.destroy({ where: { value: jwtToken } });
  }
}

export default TokenDB;