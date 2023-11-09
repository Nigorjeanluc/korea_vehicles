const tokenDefinition = (sequelize, DataTypes) => {
  const token = sequelize.define('token', {
    value: { type: DataTypes.STRING },
    user_id: { type: DataTypes.INTEGER },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
  }, {});

  token.associate = (models) => {
    token.belongsTo(models.user, {
      foreignKey: 'user_id',
      as: 'user',
      onDelete: 'CASCADE',
    });
  };

  return token;
};

export default tokenDefinition
