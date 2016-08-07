define(["jquery"], function($){

  var viewManager = (function(){
    var currentView;

    var show = function(view){
      disposeView(currentView, function(){
        render(view);  
      });
    };

    function disposeView(view, callback){
      if(view){
        _disposeView(view);
      }
      callback();
    };

    function _disposeView(view){
      view.subviews && view.subviews.forEach(function(subview){
        _disposeView(subview);
      });

      view.remove();
    }

    var render = function(view){
      currentView = view;
      $("#container").html(currentView.el);
      currentView.render();
    };

    return{
      showView: show
    }
  })();

  return viewManager;
});