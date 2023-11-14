const userDefinition = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    profileImg: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING },
    username: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    coverImg: { type: DataTypes.STRING },
    phoneNumber: { type: DataTypes.STRING },
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
    })
    user.hasMany(models.activity, {
      foreignKey: 'user_id',
      as: 'activities',
      onDelete: 'CASCADE',
    })
    user.hasOne(models.verification_code, {
      foreignKey: 'user_id',
      as: 'verification_code',
      onDelete: 'CASCADE',
    })
    user.hasOne(models.token, {
      foreignKey: 'user_id',
      as: 'token',
      onDelete: 'CASCADE',
    })
  }
  return user;
};

export default userDefinition
