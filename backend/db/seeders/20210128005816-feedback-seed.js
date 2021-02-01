'use strict';

const { User, Track } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      const tracks = await Track.findAll()
      const user = await User.findAll()

      return queryInterface.bulkInsert('Feedbacks', [
        
       { userId: user[0].id,
         trackId: tracks[0].id,
         comment: "this song is bonkers",
         createdAt: new Date(),
         updatedAt: new Date(),
        },

        { userId: user[1].id,
          trackId: tracks[1].id,
          comment: "this song is baller",
          createdAt: new Date(),
          updatedAt: new Date(),
         },

         { userId: user[2].id,
          trackId: tracks[2].id,
          comment: "what a tuuuuune",
          createdAt: new Date(),
          updatedAt: new Date(),
         },
       
        
      ], {});
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('Feedbacks', null, {});
  }
};
