const express = require('express')
const router = express.Router()

//This is the route for the RFID middleware.
//This route functions as a webhook and is triggered by the RFID reader's cloud middleware.
function rfidGetHandler (req,res) {
    //return challenge
    console.log('RFID challenge')
    return res.end(req.query.challenge);
}

function rfidPostHandler (req,res) {
    //print request body to console
    //code would go here to handle the hook
    console.log(req.body);

    //return success
    return res.status(200);
}

router.get('/', rfidGetHandler );

router.post('/', rfidPostHandler );

module.exports = {router, rfidGetHandler, rfidPostHandler};