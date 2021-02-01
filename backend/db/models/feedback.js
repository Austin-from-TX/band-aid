'use strict';
module.exports = (sequelize, DataTypes) => {
  const Feedback = sequelize.define('Feedback', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    trackId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    comment: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  Feedback.associate = function(models) {
    Feedback.belongsTo(models.Track, { foreignKey: 'trackId'})
    Feedback.belongsTo(models.User, { foreignKey: 'userId'})
  };
  return Feedback;
};