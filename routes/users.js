var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

router.post('/add', function(req, res, next) {
  var town = req.body.town;
  var adress = req.body.adress;
  var from = req.body.from;
  var until = req.body.until;

  var parkingData = require('../public/data/parkingData.json');

  // const id = new Date().getTime();

  parkingData.push({
    town,
    adress,
    from,
    until
  });
})