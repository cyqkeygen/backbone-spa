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
        this.listenTo(this.collection, "reset", this.render);
      },

      render: function(){
        var self = this;
        this.collection.forEach(function(item){
          var itemView = new ItemView({model: item});
          self.subviews.push(itemView);
          self.$el.append(itemView.render().el);
        })
        return this;
      }
    });

    return ItemsView
  }
);