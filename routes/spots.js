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
router.post('/', function(req, res, next) {
  const city = req.body.city;
  const area = req.body.area;
  const address = req.body.address;
  // internal queries, for sql.
  const cityQ = city ? ` AND city LIKE "${city}%"` : ``;
  const areaQ = area ? ` AND area LIKE "${area}%"` : ``;
  const addressQ = address ? ` AND address LIKE "%${address}%"` : ``;
  
  pool.getConnection((err, connection) => {
    /* Select those records from the "spots" table whose "id" value
     * has no reference records in the "reservations" table 
     * where those records' "ending" variable IS NULL (has no value),
     * and --^^--IF either a "city" or "area" column is asked 
     * include those records that have the asked values in them--^^--,
     * AND arrange the result of all this so that the 
     * "address" values will be in alphanumerical ASCending order.
     */
    const sql = `SELECT * FROM spots WHERE id not in(SELECT spot_id from reservations WHERE ending IS NULL) ${cityQ} ${areaQ} ${addressQ} ORDER BY address ASC`;

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
