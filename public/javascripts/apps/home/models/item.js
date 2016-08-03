define(["backbone"], function(Backbone){
  var Item = Backbone.Model.extend({
    urlRoot: "api/articles/",
    idAttribute: '_id',

    default: {
      title:    "",
      content:  "",
      time:     "",
      tags:     [],
    }
  });

  return Item;
});