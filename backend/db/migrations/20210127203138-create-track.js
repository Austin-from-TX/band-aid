'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tracks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bandName: {
        type: Sequelize.STRING(50),
        allowNull: false,
  
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Users" }
      },
      title: {
        type: Sequelize.STRING(50), 
        allowNull: false        
      },
      description: {
        type: Sequelize.TEXT, 
        allowNull: true        
      },
      source: {
        type: Sequelize.STRING,
        allowNull: false
      },
      trackImg: {
        type: Sequelize.STRING
      },
      length: {
        type: Sequelize.INTEGER
      },
      feedback: {
        type: Sequelize.TEXT, 
        allowNull: true ,
        references: { model: 'Feedbacks'} 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tracks');
  }
};