import vehicleDB from '../utils/db/vehicleDB';
import pagination from '../utils/paginateHelper';

/**
 * This class contains all methods
 * required to handle
 * signup and login and logout endpoints' request.
 */
class VehicleController {
  /**
   * This method handle the signup request.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @param {function} next The next action
   * @returns {object} The status and some data of the user.
   */
  static async addVehicle(req, res) {
    const vehicleExists = await vehicleDB.findVehicleByAttr("VIN", req.body.VIN);
    if (vehicleExists) {
      return res.status(422).json({
        status: 422,
        error: 'This vehicle already exists'
      });
    }

    const vehicle = await vehicleDB.saveVehicle({ ...req.body });

    return res.status(201).json({
      status: 201,
      message: `${vehicle.immatriculation_number} was created successfully`,
      data: vehicle
    });
  }

  /**
   * This method handle the signup request.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @returns {object} The status and some data of the user.
   */
  static async changeVehicle(req, res) {
    const vehicleExists = await vehicleDB.findVehicleByAttr("id", parseInt(req.params.id, 10));
    if (vehicleExists) {
      await vehicleDB.updateVehicle({ ...req.body, image: req.files.image && req.files.image[0] ? req.files.image[0].key.split('vehicles/')[1] : req.body.image }, vehicleExists.id);
      const vehicle = await vehicleDB.findVehicleByAttr("id", vehicleExists.id);

      // const tagExists = await tagDB.findTagByAttr("name", vehicleExists.name);
      // if (tagExists) await tagDB.updateTag({ name: vehicle.name }, tagExists.id);

      return res.status(200).json({
        status: 200,
        message: `${vehicle.name} was successfully changed`,
        data: vehicle
      });
    }

    return res.status(404).json({
      status: 404,
      error: 'This vehicle is not found'
    });
  }

  /**
   * This method handle the view vehicle request.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @param {object} next The next middleware.
   * @returns {object} The status and some data of the user.
   */
  static async viewVehicles(req, res, next) {
    const { start, end, pages, skip, paginate } = await pagination.paginateData(req.query);
    const vehicles = await vehicleDB.findAllVehicles(skip, start);
    const AllData = vehicles.rows;
    const countAllData = vehicles.count;
    if (vehicles.rows.length === 0) {
      return res.status(404).json({
        status: 404,
        message: `There are no vehicles yet`
      });
    }
    req.data = { AllData, countAllData, start, end, pages, skip, paginate };
    next();
  }

  /**
   * This method handle the view vehicle request.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @returns {object} The status and some data of the user.
   */
  static async viewVehicle(req, res) {
    const { id } = req.params;
    const vehicle = await vehicleDB.findVehicleByAttr('id', parseInt(id, 10));
    if (!vehicle) {
      return res.status(404).json({
        status: 404,
        error: "The vehicle was not found"
      });
    }
    return res.status(200).json({
      status: 200,
      message: "The vehicle fetched successfully",
      data: vehicle
    });
  }

  /**
   * This method handle the view vehicle request.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @returns {object} The status and some data of the user.
   */
  static async removeVehicle(req, res) {
    const { id } = req.params;
    const vehicle = await vehicleDB.findVehicleByAttr('id', parseInt(id, 10));
    if (!vehicle) {
      return res.status(404).json({
        status: 404,
        error: "The vehicle was not found"
      });
    }
    await vehicleDB.deleteVehicle(vehicle.id);
    return res.status(204).json({
      status: 200,
      message: "The vehicle fetched successfully",
      data: vehicle
    });
  }
}

export default VehicleController
