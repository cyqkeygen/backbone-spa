define(["jquery"], function($){

  var viewManager = (function(view, el){
    var currentView;

    var show = function(view, el){
      disposeView(currentView, function(){
        render(view, el);  
      });
    };

    var disposeView(view, callback){
      if(view){
        _disposeView(view);
      }
      callback();
    };

    var _disposeView(view){
      view.subviews && view.subviews.forEach(function(subview){
        _disposeView(subview);
      });

      view.remove();
    }

    var render = function(view, el){
      currentView = view;
      el.html(currentView);
      currentView.render();
    };

    return{
      showView: show
    }
  })();

  return viewManager;
});