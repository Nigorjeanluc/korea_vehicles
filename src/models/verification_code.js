const codeDefinition = (sequelize, DataTypes) => {
  const verification_code = sequelize.define('verification_code', {
    value: { type: DataTypes.STRING },
    user_id: { type: DataTypes.INTEGER },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
  }, {});

  verification_code.associate = (models) => {
    verification_code.belongsTo(models.user, {
      foreignKey: 'user_id',
      as: 'user',
      onDelete: 'CASCADE',
    });
  };
  return verification_code;
};

export default codeDefinition
