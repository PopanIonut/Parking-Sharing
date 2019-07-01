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

// GET /READ entire "spots" listed.  http://localhost:3000/get
router.get('/', function(req, res, next) {
  //  res.send('respond with a resource');
  pool.getConnection((err, connection) => {
    const sql = `SELECT * FROM reservations`;

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
