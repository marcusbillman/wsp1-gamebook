const express = require('express');
const router = express.Router();
const pool = require('../models/db');

const sqlQuery = 'SELECT * FROM pages';

router.get('/', function(req, res, next) {
  pool.getConnection((error, connection) => {
    if (error) {
      throw error;
    }
  
    pool.query(sqlQuery, function (err, result, fields) {
      if (err) throw err;
      res.json({
        status: 200,
        result: result
      });
    });
  
    connection.release();
  });
});

module.exports = router;