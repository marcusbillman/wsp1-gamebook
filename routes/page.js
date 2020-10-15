var express = require('express');
var router = express.Router();
const pool = require('../models/db');

const sqlQuery = 'SELECT * FROM pages WHERE page_id = ?';

router.get('/:id', function(req, res, next) {
  pool.getConnection((error, connection) => {
    if (error) throw error;
  
    pool.query(sqlQuery, [req.params.id], function (err, result, fields) {
      if (err) throw err;
      res.json({
        status: 200,
        id: req.params.id,
        result: result
      });
    });
  
    connection.release();
  });
});

module.exports = router;
