define([
  "underscore",
  "backbone",
  "text!homeTemplates/itemView.html"
  ], 
  function(_, Backbone, itemViewTemplate){

    // _.templateSettings = {
    //   interpolate: /\{\{(.+?)\}\}/g
    // };

    var ItemView = Backbone.View.extend({
      className: "home-item",
      template: _.template(itemViewTemplate),

      initialize: function(){
        
      },

      render: function(){
        this.$el.append(this.template(this.model.toJSON()));
        return this;
      }
    });

    return ItemView
  }
);