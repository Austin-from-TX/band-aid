'use strict';

const { User } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await User.findAll()

    return queryInterface.bulkInsert(
      "Tracks", [{
        bandName: 'The creeps',
        userId: users[0].id,
        title: 'Scab Pickers',
        source: 'https://getsong.com/song',
        trackImg: null,
        length: 2800,
        feedback: "THis track is great!",
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {bandName: 'The Yoopers',
        userId: users[1].id,
        title: 'Super Troopers',
        source: 'https://getsong.com/song',
        trackImg: null,
        length: 2800,
        feedback: "Meh. Too poppy",
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {bandName: 'Miley Cyrus',
        userId: users[0].id,
        title: 'I suck in more ways than one',
        source: 'https://getsong.com/song',
        trackImg: null,
        length: 2800,
        feedback: "Miley certainly does suck many big ones!!! ",
        createdAt: new Date(),
        updatedAt: new Date(),
        }
], {});
      },
  

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('People', null, {});
    
  }
}
