import models from '../../models';

const {
  user,
  token
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
        },
        // {
        //   model: Province,
        //   as: 'province',
        //   attributes: ['id', 'name']
        // },
        // {
        //   model: District,
        //   as: 'district',
        //   attributes: ['id', 'name']
        // },
        // {
        //   model: Sector,
        //   as: 'sector',
        //   attributes: ['id', 'name']
        // },
        // {
        //   model: Task,
        //   as: 'tasks',
        //   required: false,
        //   // Pass in the Product attributes that you want to retrieve
        //   attributes: ['id', 'title', 'created_at', 'updated_at'],
        // },
        // {
        //   model: Task,
        //   as: 'employeeTasks',
        //   required: false,
        //   // Pass in the Product attributes that you want to retrieve
        //   attributes: ['id', 'title', 'created_at', 'updated_at'],
        //   through: {
        //     // This block of code allows you to retrieve the properties of the join table
        //     model: UserTask,
        //     as: 'UserTasks',
        //     attributes: ['taskId'],
        //   }
        // }
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
        ...entry, isVerified: false, created_at: new Date(), updated_at: new Date()
      },
      {
        fields: [
          'id', 'fullname', 'email', 'username', 'gender', 'password', 'locationIds', 'phoneNumber', 'nationalId', 'passportId', 'role', 'isVerified', 'create_at', 'updated_at'
        ]
      }
    );
    return acceptedUser;
  }
}

export default UserDB
