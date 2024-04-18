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
    dateCheckOut: DataTypes.INTEGER,
    isPaid: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};