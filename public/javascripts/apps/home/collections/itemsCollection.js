define([
  "backbone",
  "../models/item",
  ], 
  function(Backbone, Item){
    var ItemsCollection = Backbone.Collection.extend({
      model: Item,
      url: "api/items",
      parse: function(res){
        if(res.success){
          return res.items
        }else{
          return []
        }
      }
    });

    return ItemsCollection;
  }
);