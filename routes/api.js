var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({success: true, message: '12'});
});

router.get('/items', function(req, res, next) {
  var items = {
      title:    "item1",
      content:  "item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1",
      time:     "2016-06-01",
      tags:     ["nodejs", "express"],
    },
    {
      title:    "item2",
      content:  "item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1",
      time:     "2016-06-02",
      tags:     ["nodejs", "express"],
    }]
  res.json({success: true, message: '12'});
});

router.get('/items/:id', function(req, res, next) {
  res.json({success: true, message: '12'});
});

module.exports = router;
