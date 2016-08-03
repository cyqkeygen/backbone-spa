define([
  "jquery",
  "backbone",
  "viewManager"], 
  function($, Backbone, viewManager){
    var Router = Backbone.Router.extend({
      routes: {
        "": "home",
        "home": "home",
        "articles": "articles"
      },

      home: function(){
        // homeApp.render();
      },
      articles: function(){

      },
    });

    return Router
  }
);