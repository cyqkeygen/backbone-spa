define([
  "underscore",
  "backbone",
  "text!homeTemplates/itemView.html"
  ], 
  function(_, Backbone, itemViewTemplate){
    var ItemView = Backbone.View.extend({
      className: "home-item",
      template: _.template(itemViewTemplate),

      render: function(){
        this.$el.append(this.template());
        return this;
      }
    });

    return ItemView
  }
);