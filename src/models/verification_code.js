const codeDefinition = (sequelize, DataTypes) => {
  const verification_code = sequelize.define('verification_code', {
    user_id: { type: DataTypes.INTEGER },
    value: { type: DataTypes.STRING },
    created_at: { type: DataTypes.DATE },
    updated_at: { type: DataTypes.DATE }
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
