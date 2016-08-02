define(["jquery", "backbone"], function($, Backbone){
  var Router = Backbone.Router.extend({
    routes: {
      "": "home",
      "home": "home",
      "articles": "articles"
    },

    home: function(){
      $("#sidebar").append(123);
    },
    articles: function(){
      
    },
  });

  return Router
});