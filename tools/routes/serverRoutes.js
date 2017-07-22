let express = require('express');
let config = require('../config');
let _ = require('lodash');


const router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});



module.exports =  router;