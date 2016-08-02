define(["backbone"], function(Backbone){
  var Article = Backbone.Model.extend({
    urlRoot: "api/articles/",
    idAttribute: '_id',

    default: {
      title:    "",
      content:  "",
      time:     "",
      tags:     [],
    }
  });

  return Article;
});