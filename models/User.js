const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}
  User.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    fullName: {
      type: DataTypes.STRING,
      field: 'full_name',
      allowNull: false
    },

    dob: {
      type: DataTypes.DATE,
    },

    gender: {
      type: DataTypes.ENUM('men', 'women'),
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false
  });

  return User;
};
