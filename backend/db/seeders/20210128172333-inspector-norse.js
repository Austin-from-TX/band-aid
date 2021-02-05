'use strict';
const { User } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const users = await User.findAll();
 
      return queryInterface.bulkInsert('Tracks', [
        // { bandName: 'Todd Terje',
        // userId: users[1].id,
        // title: 'Inspector Norse',
        // source: 's3://bandaidreact/Todd Terje - inspector norse.mp3',
        // trackImg: null,
        // length: 2800,
        // createdAt: new Date(),
        // updatedAt: new Date(),
        //  },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Tracks', null, {});
  }
};
