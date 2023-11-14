const activityDefinition = (sequelize, DataTypes) => {
  const activity = sequelize.define('activity', {
    vehicle_id: { type: DataTypes.INTEGER },
    user_id: { type: DataTypes.INTEGER },
    category_id: { type: DataTypes.INTEGER },
    progress: { type: DataTypes.INTEGER },
    sub_category_id: { type: DataTypes.INTEGER },
    expected_delivery_at: { type: DataTypes.DATE },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
  }, {})

  activity.associate = (models) => {
    activity.belongsTo(models.vehicle, {
      foreignKey: 'vehicle_id',
      as: 'vehicle',
      onDelete: 'CASCADE',
    })
    activity.belongsTo(models.user, {
      foreignKey: 'user_id',
      as: 'user',
      onDelete: 'CASCADE',
    })
    activity.belongsTo(models.category, {
      foreignKey: 'category_id',
      as: 'category',
      onDelete: 'CASCADE',
    })
    activity.belongsTo(models.sub_category, {
      foreignKey: 'sub_category_id',
      as: 'sub_category',
      onDelete: 'CASCADE',
    })
  }

  return activity
}

export default activityDefinition
