import models from '../../models';

const {
  user,
  token,
  verification_code
} = models;

/**
 * This class contains
 * all methods required to save/edit/retrieve/delete
 * the user's data
 */
class UserDB {
  /**
   * Finds the user's email if he/she exists.
   * @param {string} attr users table field.
   * @param {string} val value to be found.
   * @returns {object} The users's data.
   */
  static async findUser(attr, val) {
    const userExists = await user.findOne({
      where: { [attr]: val },
      include:
      [
        {
          model: token,
          as: 'token',
          attributes: ['id', 'value']
        }, {
          model: verification_code,
          as: 'verification_code',
          attributes: ['id', 'value']
        }
      ]
    });
    return userExists;
  }

  /**
   * Finds the user's username if he/she exists.
   * @param {string} username users table field.
   * @returns {object} The users's data.
   */
  static async confirm(username) {
    const verifiedUser = await user.update({ isVerified: true }, { where: { username } });
    return verifiedUser;
  }

  /**
   * Saves the user in the DB.
   * @param {object} entry The request sent by a user.
   * @returns {object} The users's data.
   */
  static async saveUser(entry) {
    const acceptedUser = await user.create(
      {
        ...entry, createdAt: new Date(), updatedAt: new Date()
      },
      {
        fields: [
          'name',
          'username',
          'email',
          'phoneNumber',
          'password',
          'role',
          'isVerified',
          'create_at',
          'updatedAt'
        ]
      }
    );
    return acceptedUser;
  }
}

export default UserDB
