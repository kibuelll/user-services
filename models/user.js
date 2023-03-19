'use strict';
const {
  Model
} = require('sequelize');
const { hashPass } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      
    }
  }
  User.init({
    email: {
      type :DataTypes.STRING,
      allowNull:false,
      validate : {
        notEmpty:true,
        notNull:true
      }

    },
    name: {
      type :DataTypes.STRING,
      allowNull:false,
      validate : {
        notEmpty:true,
        notNull:true
      }

    },
    password: {
      type :DataTypes.STRING,
      allowNull:false,
      validate : {
        notEmpty:true,
        notNull:true
      }

    },
    gender: {
      type :DataTypes.STRING,
      allowNull:false,
      validate : {
        notEmpty:true,
        notNull:true
      }

    }
  }, {
    sequelize,
    modelName: 'User',
    hooks : {
      beforeCreate(user) {
        user.password = hashPass(user.password)
      }
    }
  });
  return User;
};