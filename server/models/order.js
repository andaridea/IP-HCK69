'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.Hotel)
      Order.belongsTo(models.User)
    }
  }
  Order.init({
    HotelId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    orderId: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull: {
          msg: 'Order id is required'
        },
        notEmpty:{
          msg: 'Order id is required'
        }
      } 
    },
    dateCheckIn: {
      type: DataTypes.DATE,
      allowNull: false,
      validate:{
        notNull: {
          msg: 'Date Check In is required'
        },
        notEmpty:{
          msg: 'Date Check In is required'
        }
      } 
    },
    dateCheckOut: {
      type: DataTypes.DATE,
      allowNull: false,
      validate:{
        notNull: {
          msg: 'Date Check Out is required'
        },
        notEmpty:{
          msg: 'Date Check Out is required'
        }
      } 
    },
    isPaid: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    totalPrice: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};