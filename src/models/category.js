const categoryDefinition = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    name: { type: DataTypes.STRING },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
  }, {})

  category.associate = (models) => {
    category.hasMany(models.sub_category, {
      foreignKey: 'category_id',
      as: 'categories',
      onDelete: 'CASCADE',
    })
    category.hasMany(models.activity, {
      foreignKey: 'category_id',
      as: 'activities',
      onDelete: 'CASCADE',
    })
  }

  return category
}

export default categoryDefinition
