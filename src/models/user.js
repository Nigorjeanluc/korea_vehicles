const userDefinition = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    username: { type: DataTypes.STRING },
    coverImg: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING },
    isVerified: { type: DataTypes.BOOLEAN },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
  }, {});

  user.associate = (models) => {
    user.hasMany(models.vehicle, {
      foreignKey: 'user_id',
      as: 'vehicles',
      onDelete: 'CASCADE',
    });
  }
  return user;
};
  
export default userDefinition;