var express = require('express');
var router = express.Router();
const { query } = require('../models/db');

router.get('/:id', async function(req, res, next) {
  try {
    let page = await query(
      'SELECT * FROM pages WHERE page_id = ?',
      req.params.id
    );

    const links = await query(
      'SELECT * FROM links WHERE from_page_id = ?',
      req.params.id
    );

    page[0].body = page[0].body.split("\n");
    
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
