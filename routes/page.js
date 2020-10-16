var express = require('express');
var router = express.Router();
const { query } = require('../models/db');

router.get('/:id', async function(req, res, next) {
  try {
    const page = await query(
      'SELECT * FROM pages WHERE page_id = ?',
      req.params.id
    );

    const links = await query(
      'SELECT * FROM links WHERE from_page_id = ?',
      req.params.id
    );
    
    res.render('page', {
      page: page[0],
      links: links
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;
