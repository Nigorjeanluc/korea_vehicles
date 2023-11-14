const vehicleServiceDefinition = (sequelize, DataTypes) => {
  const vehicle_service = sequelize.define('vehicle_service', {
    vehicle_id: { type: DataTypes.INTEGER },
    insurance_issue_date: { type: DataTypes.DATE },
    insurance_period: { type: DataTypes.STRING },
    inspection_date: { type: DataTypes.DATE },
    inspection_period: { type: DataTypes.STRING },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
  }, {})

  vehicle_service.associate = (models) => {
    vehicle_service.belongsTo(models.vehicle, {
      foreignKey: 'vehicle_id',
      as: 'vehicle',
      onDelete: 'CASCADE',
    })
  }

  return vehicle_service
}

export default vehicleServiceDefinition
