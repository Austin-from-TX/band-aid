const express = require('express')
const router = express.Router()
const db = require('../../db/models')
const asyncHandler = require('express-async-handler')
const { singlePublicFileUpload, singleMulterUpload } = require('../../awsS3');
const { User, Track} = db




router.get('/users/:userId', 
    asyncHandler(async (req, res) => {
        const { userId } = req.params
        const tracks = await Track.findAll({where: {userId}})
        console.log("tracks ----", tracks)
        return res.json(tracks)
    }))


router.post('/', 
    singleMulterUpload('track'),
    asyncHandler(async (req, res) => {
        const { bandName, title, userId } = req.body;
        const source = await singlePublicFileUpload(req.file);
       
        const newTrack = await Track.create({bandName, userId, title, source, })
           
            return res.json({newTrack})

        }))
       
           
module.exports = router 


