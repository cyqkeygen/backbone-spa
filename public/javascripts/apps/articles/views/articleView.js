define([
  "underscore",
  "backbone",
  "text!articlesTemplates/articleView.html"
  ], 
  function(_, Backbone, articleViewTemplate){
    var ArticleView = Backbone.View.extend({
      className: "article-item",
      template: _.template(articleViewTemplate),

      initialize: function(){
        
      },

      render: function(){
        this.$el.append(this.template(this.model.toJSON()));
        return this;
      }
    });

    return ArticleView;
  }
);