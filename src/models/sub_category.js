const subCategoryDefinition = (sequelize, DataTypes) => {
  const sub_category = sequelize.define('sub_category', {
    name: { type: DataTypes.STRING },
    category_id: { type: DataTypes.INTEGER },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
  }, {})

  sub_category.associate = (models) => {
    sub_category.belongsTo(models.category, {
      foreignKey: 'category_id',
      as: 'category',
      onDelete: 'CASCADE',
    })
    sub_category.hasMany(models.activity, {
      foreignKey: 'sub_category_id',
      as: 'activities',
      onDelete: 'CASCADE',
    })
  }

  return sub_category
}

export default subCategoryDefinition
