'use strict';
module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define('Track', {
    bandName: { 
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users", key: "id" }
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },

    source: {
      type: DataTypes.STRING,
       allowNull: false
    },

    trackImg: { 
      type: DataTypes.STRING,
      allowNull: true
    },

    length: {
      type: DataTypes.INTEGER,
      allowNull: true
    }, 

    feedback: {
       type: DataTypes.TEXT, 
       allowNull: true
       references: { model: "Feedbacks", key: "id" }
    }
  }, {});
  Track.associate = function(models) {
    Track.belongsTo(models.User, { foreignKey: 'userId'})
    Track.hasMany(models.Feedback, {foreignKey: 'trackId'})
  };
  return Track;
};