var express = require('express');
var mysql = require('mysql');

var router = express.Router();

/* DB: "parking" connection settings. */
const pool = mysql.createPool({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'parking',
  timezone: '+00:00'  //set to "neutral".
});

// GET /READ entire "spots" listed.  http://localhost:3000/get
// Takes into consideration the search inputs too.
router.get('/', function(req, res, next) {
  const city = true ? ` AND city = "Cluj"` : ``; // TODO:: swap static values to dynamc ${} ones.
  const area = true ? ` AND area = "Gruia"` : ``;  // TODO:: if "false" it doesn't get used in the query -> make if or case selection based on the "search inputs".
  //  res.send('respond with a resource');
  pool.getConnection((err, connection) => {
    /* Select those records from the "spots" table whose "id" value
     * has no reference records in the "reservations" table 
     * where those records' "ending" variable IS NULL (has no value),
     * and --^^--IF either a "city" or "area" column is asked 
     * include those records that have the asked values in them--^^--,
     * AND arrange the result of all this so that the 
     * "address" values will be in alphanumerical ASCending order.
     */
    const sql = `SELECT * FROM spots WHERE id not in(SELECT spot_id from reservations WHERE ending IS NULL) ${city} ${area} ORDER BY address ASC`;

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
	// DB field names are right side.
  var cityTown = req.body.city;
  var area = req.body.area;
  var strAddress = req.body.address;
  var spotNr = req.body.spot_nr;
  var tFrom = req.body.t_from;
  var tUntil = req.body.t_until;
  var description = req.body.description;

  console.warn("Add: ", cityTown, area, strAddress, spotNr,tFrom, tUntil, description);
  
  pool.getConnection((err, connection) => {
    const sql = `INSERT INTO spots 
      (id, city, area, address, spot_nr, t_from, t_until, description)
      VALUES (NULL, "${cityTown}", "${area}", "${strAddress}", "${spotNr}", "${tFrom}", "${tUntil}", "${description}")`;
      
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
  // DB field names are right side.
  var id = req.body.id;
  var cityTown = req.body.city;
  var area = req.body.area;
  var strAddress = req.body.address;
  var spotNr = req.body.spot_nr;
  var tFrom = req.body.t_from;
  var tUntil = req.body.t_until;
  var description = req.body.description;
  
  console.warn("Update: ", id, cityTown, area, strAddress, spotNr,tFrom, tUntil, description);
  
  var id = req.body.id;
    
  console.warn("Remove: ", id);
  
  pool.getConnection((err, connection) => {
    const sql = `UPDATE spots 
    SET city = "${cityTown}", area = "${area}" address = "${strAddress}", spot_nr = "${spotNr}", t_from = "${tFrom}", t_until = "${tUntil}", description = "${description}"
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


// DELETE record from "spots" DB.  http://localhost:3000/spots/delete
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
