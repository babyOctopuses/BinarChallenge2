'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_game_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user_game_history.init({
    user_id: DataTypes.NUMBER,
    player_choice: DataTypes.STRING,
    com_choice: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_game_history',
  });
  return user_game_history;
};