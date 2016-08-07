define([
  "jquery",
  "backbone",
  "homeApp/app",
  "articlesApp/app"
  ],
  function($, Backbone, homeApp, articlesApp){
    var Router = Backbone.Router.extend({
      routes: {
        "": "home",
        "home": "home",
        "articles": "articles"
      },

      home: function(){
        homeApp.render();
      },
      articles: function(){
        articlesApp.render();
      },
    });

    return Router
  }
);