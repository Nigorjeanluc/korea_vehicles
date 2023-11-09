const vehicleDefinition = (sequelize, DataTypes) => {
  const vehicle = sequelize.define('vehicle', {
    VIN: { type: DataTypes.STRING },
    model_year: { type: DataTypes.INTEGER },
    immatriculation_number: { type: DataTypes.STRING },
    user_id: { type: DataTypes.INTEGER },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
  }, {});

  vehicle.associate = (models) => {
    vehicle.belongsTo(models.user, {
      foreignKey: 'user_id',
      as: 'user',
      onDelete: 'CASCADE',
    });
  }

  return vehicle;
};

export default vehicleDefinition
