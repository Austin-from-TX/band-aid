'use strict';

const { User } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await User.findAll()

    return queryInterface.bulkInsert(
      "Tracks", [{
        bandName: 'austin-tacious',
        userId: 1,
        title: 'Tremolo Chords',
        source: 'https://bandaidreact.s3.amazonaws.com/1612176637801',
        trackImg: null,
        length: null,
        feedback: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {bandName: 'austin-tacious',
        userId: 1,
        title: 'surf it up riff',
        source: 'https://bandaidreact.s3.eu-west-1.amazonaws.com/1612177124659',
        trackImg: null,
        length: null,
        feedback: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {bandName: 'austin-tacious',
        userId: 1,
        title: 'clean picking',
        source: 'https://bandaidreact.s3.eu-west-1.amazonaws.com/1612178146504',
        trackImg: null,
        length: null,
        feedback: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {bandName: 'austin-tacious',
        userId: 1,
        title: 'descending open chords',
        source: 'https://bandaidreact.s3.eu-west-1.amazonaws.com/1612178393627',
        trackImg: null,
        length: null,
        feedback: null,
        createdAt: new Date(),
        updatedAt: new Date(),          
        }
], {});
      },
  

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('People', null, {});
    
  }
}
