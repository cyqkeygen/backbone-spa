define([
  "viewManager",
  "articlesApp/collections/articlesCollection",
  "articlesViews/articlesView"
  ], 
  function(viewManager, ArticlesCollection, ArticlesView){
    var render = function(){
      var articlesCollection = new ArticlesCollection();
      var articlesView = new ArticlesView({collection: articlesCollection});
      articlesCollection.fetch({reset: true})
      viewManager.showView(articlesView);
    };

    return {
      render: render
    }
  }
);