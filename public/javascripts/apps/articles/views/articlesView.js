define([
  "jquery",
  "backbone",
  "articlesViews/articleView"
  ], 
  function($, Backbone, ArticleView){
    var ArticlesView = Backbone.View.extend({
      className: "articles-items",

      initialize: function(){
        this.subviews = [];
        this.listenTo(this.collection, "reset", this.render);
      },

      render: function(){
        var self = this;
        this.collection.forEach(function(article){
          var articleView = new ArticleView({model: article});
          self.subviews.push(articleView);
          self.$el.append(articleView.render().el);
        })
        return this;
      }
    });

    return ArticlesView;
  }
);