define([
  "backbone",
  "../models/article",
  ], 
  function(Backbone, Article){
    var ArticlesCollection = Backbone.Collection.extend({
      model: Article,
      url: "api/articles",
      parse: function(res){
        if(res.success){
          return res.articles
        }else{
          return []
        }
      }
    });

    return ArticlesCollection;
  }
);