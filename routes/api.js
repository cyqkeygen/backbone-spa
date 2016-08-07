var express = require('express');
var router = express.Router();
var _ = require('lodash');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({success: true, message: '12'});
});

router.get('/items', function(req, res, next) {
  var items = [{
      title:    "Backbone 单双击冲突问题",
      url:      "/images/Octocat/Octocat.jpg",
      time:     "2016-06-01",
      tags:     ["Backbone", "Events"],
    },
    {
      title:    "log4js 配置笔记",
      url:      "/images/Octocat/Octocat.jpg",
      time:     "2016-06-02",
      tags:     ["nodejs", "express"],
    }];
  for (var i = 0; i < 5; i++) {
    items = _.concat(items, items);
  };
  res.json({success: true, items: items});
});

router.get('/articles', function(req, res, next) {
  var articles = [{
      title:    "article-1",
      content:  "article-1 article-1 article-1 article-1 article-1 article-1 article-1 article-1 article-1 article-1 article-1 article-1 article-1 article-1 article-1",
      time:     "2016-06-01",
      tags:     ["nodejs", "express"],
    },
    {
      title:    "item2",
      content:  "article-1 article-1 article-1 article-1 article-1 article-1 article-1 article-1 article-1 article-1 article-1 article-1 article-1 article-1 article-1",
      time:     "2016-06-02",
      tags:     ["nodejs", "express"],
    }]
  res.json({success: true, articles: articles});
});


router.get('/items/:id', function(req, res, next) {
  res.json({success: true, message: '12'});
});

module.exports = router;
