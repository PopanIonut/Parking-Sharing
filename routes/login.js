var express = require('express');
var mysql = require('mysql');

var router = express.Router();

/* DB: "parking" connection settings. */
const pool = mysql.createPool({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'parking',
  timezone: '+00:00'
});

// GET /READ login related data.  http://localhost:3000/get
router.post('/', function(req, res, next) {
  const phone = req.body.phone;
  const email = req.body.email;
  const car_nr = req.body.car_nr;
  // internal queries, for sql. 
  const lgPhoneQ = ` phone = "${phone}"`;
  const lgEmailQ = ` AND email = "${email}"`;
  const lgCarQ = ` AND car_nr = "${car_nr}"`;
  
  pool.getConnection((err, connection) => {
    const sql = `SELECT * FROM people WHERE ${lgPhoneQ} ${lgEmailQ} ${lgCarQ}`;
    console.log("Login js sql: \n", sql);

    connection.query(sql, (err, results) => {
      if(!!err){  console.log(err);   } else {
        console.log("DB \"parking\" Connected.");
        res.json(results);
        connection.release();
      }
    });
  });
});

// GET static user data, json
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
