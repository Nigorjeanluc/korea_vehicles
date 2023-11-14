import models from '../../models';

const {
  vehicle,
  user
} = models;

/**
 * class to deal with all needed operations
 * on the vehicle table
 */
class VehicleDB {
  /**
   * Finds the user's email if he/she exists.
   * @param {string} attr users table field.
   * @param {string} val value to be found.
   * @returns {object} The users's data.
   */
  static async findVehicleByAttr(attr, val) {
    const record = await vehicle.findOne({
      where: { [attr]: val },
      include:
      [
        {
          model: user,
          as: 'user',
          attributes: [
            'name',
            'username',
            'email',
            'phoneNumber',
            'password',
            'role',
            'isVerified',
            'createdAt',
            'updatedAt'
          ]
        },
      ]
    });
    return record;
  }

  /**
   * insert generatyed vehicle into table in the DB.
   * @param {object} theVehicle The vehicle
   * @param {integer} userId The user id.
   * @returns {string} The users's vehicle.
   */
  static async saveVehicle(theVehicle) {
    const record = await vehicle.create({
      ...theVehicle,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    return record;
  }

  /**
   * update vehicle into table in the DB
   * @param {object} data
   * @param {object} id
   * @returns {string} The users's interaction.
   */
  static async updateVehicle(data, id) {
    const record = await vehicle.update({
      ...data
    },
    {
      where: { id }
    });
    return record;
  }

  /**
   * insert generatyed code into table in the DB.
   * @param {integer} skip limit.
   * @param {integer} start from.
   * @returns {object} groups request data.
   */
  static async findAllVehicles(skip, start) {
    const records = await vehicle.findAndCountAll({
      limit: skip,
      offset: start,
      order: [['id', 'DESC']],
      include:
      [
        {
          model: user,
          as: 'user',
          attributes: [
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
        },
      ]
    });
    return records;
  }

  /**
   * delete vehicle from validteam table in the DB.
   * @param {integer} id The request sent by a user.
   * @returns {string} The users's vehicle.
   */
  static async deleteVehicle(id) {
    await vehicle.destroy({ where: { id } });
  }
}

export default VehicleDB
