var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const request = require('request');
const { json } = require('express');
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Go to /availablerooms to check the available rooms' });
});

router.get('/availablrooms', function(req, res, next) {
                res.send("These are the available rooms :<br/>Type no 1: DOUBLE BEDROOM <br/>Type no 2: TRIPPLE BEDROOM <br/>Type no 3: ROOM WITH POOL <br/>Type no 4: DOUBLE NON AC ROOM<br/>Type no 5: SINGLE NON AC ROOM");
               
});

module.exports = router;


