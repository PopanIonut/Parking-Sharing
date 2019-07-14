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
  const lgPhone = req.body.phone;
  const lgEmail = req.body.email;
  const lgCar = req.body.car_nr;
  // internal queries, for sql. 
  const lgPhoneQ = lgPhone ? ` phone = "${lgPhone}"` : ``;
  const lgEmailQ = lgEmail ? ` AND email = "${lgEmail}"` : ``;
  const lgCarQ = lgCar ? ` AND car_nr = "${lgCar}"` : ``;
  
  pool.getConnection((err, connection) => {
    const sql = `SELECT * FROM people WHERE ${lgPhoneQ} ${lgEmailQ} ${lgCarQ}`;

    connection.query(sql, (err, results) => {
      if(!!err){  console.log(err);   } else {
        console.log("DB \"parking\" Connected.");
        res.json(results);
        connection.release();
      }
    });
  });
});
 
module.exports = router;
