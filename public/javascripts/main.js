define(["./router", "backbone"], function(Router, Backbone){
  var init = function(){
    var router = new Router();
    Backbone.history.start();  
  };
  
  return {
    initialize: init
  }
});