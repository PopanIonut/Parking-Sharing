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

/// ADD /CREATE new record in "spots".  http://localhost:3000/spots/add
router.post('/add', function(req, res, next) {
  var cityTown = req.body.city_town;
  var strAddress = req.body.str_address;
  var spotNr = req.body.spot_nr;
  var tFrom = req.body.t_from;
  var tUntil = req.body.t_until;
  
  console.warn("Add: ", cityTown, strAddress, spotNr, tFrom, tUntil);
  
  pool.getConnection((err, connection) => {
    const sql = `INSERT INTO spots 
      (id, city_town, str_address, spot_nr, t_from, t_until)
      VALUES (NULL, "${cityTown}", "${strAddress}", "${spotNr}", "${tFrom}", "${tUntil}")`;
      
    console.log(sql);
    connection.query(sql, (err, result) => {
      const id = result.insertId;
      res.json({
        success: true,
        id,
        message: "Done!"
      });
      
      connection.release();
    });
  });
});


// TODO: UPDATE record in "spots".  http://localhost:3000/spots/update
router.put('/update', function(req, res, next) {
  var id = req.body.id;
  var cityTown = req.body.city_town;
  var strAddress = req.body.str_address;
  var spotNr = req.body.spot_nr;
  var tFrom = req.body.t_from;
  var tUntil = req.body.t_until;
  
  console.warn("Update: ", id, cityTown, strAddress, spotNr, tFrom, tUntil);
  
  var id = req.body.id;
    
  console.warn("Remove: ", id);
  
  pool.getConnection((err, connection) => {
    const sql = `UPDATE contacts 
    SET city_town = "${cityTown}", str_address = "${strAddress}", spot_nr = "${spotNr}", t_from = "${tFrom}", t_until = "${tUntil}"
    WHERE id = ${id}`;
        
    connection.query(sql, (err, results) => {
      res.json({
        success: true,
        message: "Done!"
      });
        
      connection.release();
    });
  });
});


// DELETE record from "spots".  http://localhost:3000/spots/delete
router.delete('/delete', function(req, res, next) {
  var id = req.body.id;
  
  console.warn("Remove: ", id);

  pool.getConnection((err, connection) => {
    const sql = `DELETE FROM spots WHERE id = ${(id)}`;
      
    connection.query(sql, (err, results) => {
      res.json({
        success: true,
        message: "Done!"
      });
      
      connection.release();
    });
  });
});

module.exports = router;
