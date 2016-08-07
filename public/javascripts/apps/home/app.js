define([
  "viewManager",
  "apps/home/collections/itemsCollection",
  "homeViews/itemsView"
  ], 
  function(viewManager, ItemsCollection, ItemsView){
    var render = function(){
      var itemsCollection = new ItemsCollection();
      var itemsView = new ItemsView({collection: itemsCollection});
      itemsCollection.fetch({reset: true})
      viewManager.showView(itemsView);
    };

    return {
      render: render
    }
  }
);