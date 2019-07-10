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
  const lgEmail = true ? ` AND email = "${document.querySelector("[name=lgMail]").value}"` : ``;
  const lgCar = true ? ` AND car_nr = "${document.querySelector("[name=lgCar]").value}"` : ``; // TODO:: swap static values to dynamc ${} ones.
  const lgPhone = true ? ` phone = "${document.querySelector("[name=lgPhone]").value}"` : ``;

  pool.getConnection((err, connection) => {
    const sql = `SELECT * FROM people WHERE ${lgPhone} ${lgEmail} ${lgCar}`;

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
