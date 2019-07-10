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
router.get('/', function(req, res, next) {
  const lgPhone = true ? ` phone = "769555426"` : ``; // TODO:: swap static values to dynamc ${} ones.
  const lgEmail = true ? ` AND email = "CristianMunteanu@gmail.com"` : ``;
  const lgCar = true ? ` AND car_nr = "CJ01BOS"` : ``;
  
  pool.getConnection((err, connection) => {
    const sql = `SELECT * FROM people WHERE ${lgPhone} ${lgEmail} ${lgCar}`;

    connection.query(sql, (err, results) => {
      if(!!err){  console.log(err);   } else {
        console.log("DB \"parking\" Connected! :)");
        res.json(results);
        connection.release();
      }
    });
  });
});
 
module.exports = router;