const userDefinition = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    username: { type: DataTypes.STRING },
    coverImg: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING },
    isVerified: { type: DataTypes.BOOLEAN },
    created_at: { type: DataTypes.DATE },
    updated_at: { type: DataTypes.DATE }
  }, {});

  user.associate = (models) => {
    user.hasMany(models.vehicle, {
      foreignKey: 'user_id',
      as: 'vehicles',
      onDelete: 'CASCADE',
    });
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
