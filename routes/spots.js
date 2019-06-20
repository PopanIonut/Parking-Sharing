var express = require('express');
var mysql = require('mysql');

var router = express.Router();

/* DB: "parking" connection settings. */
const pool = mysql.createPool({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'parking'
});

// GET /READ entire "spots" listed.  http://localhost:3000/get
router.get('/', function(req, res, next) {
  //  res.send('respond with a resource');
  pool.getConnection((err, connection) => {
    const sql = `SELECT * FROM spots`;

    connection.query(sql, (err, results) => {
      if(!!err){  console.log(err);   } else {
        console.log("DB \"parking\" Connected! :)");
        res.json(results);
        connection.release();
      }
    });
  });
});

// TODO: ADD /CREATE new record in "spots".  http://localhost:3000/spots/add
// TODO: UPDATE record in "spots".  http://localhost:3000/spots/update
// TODO: DELETE record from "spots".  http://localhost:3000/spots/delete

module.exports = router;
