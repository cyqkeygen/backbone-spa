define([
  "jquery",
  "backbone",
  "homeViews/itemView"
  ], 
  function($, Backbone, ItemView){
    var ItemsView = Backbone.View.extend({
      className: "home-items",

      initialize: function(){
        this.subviews = [];
        this.listenTo(this.collection, "reset", render);
      }

      render: function(){
        var self = this;
        this.collection.forEach(function(item){
          var itemView = new ItemView({model: item});
          self.subviews.push(itemView);
          this.$el.append(itemView.el);
        })
        return this;
      }
    });

    return ItemsView
  }
);