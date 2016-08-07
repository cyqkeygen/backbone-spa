require.config({
  paths: {
    "jquery":               "/jquery/dist/jquery",
    "easing":               "/javascripts/core/jq.ease",
    "underscore":           "/underscore/underscore",
    "backbone":             "/backbone/backbone",
    "viewManager":          "viewManager",
    "text":                 "/text/text",
    "store":                "store2/dist/store2",
    "apps":                 "/javascripts/apps",
    "homeApp":              "/javascripts/apps/home",
    "articlesApp":          "/javascripts/apps/articles",
    "articleCollctions":    "/javascripts/apps/articles/collections",
    "article":              "/javascripts/apps/articles/models",
    "articlesTemplates":     "/javascripts/apps/articles/templates",
    "articlesViews":        "/javascripts/apps/articles/views",
    "homeCollctions":       "/javascripts/apps/home/collections",
    "homeModels":           "/javascripts/apps/home/models",
    "homeTemplates":        "/javascripts/apps/home/templates",
    "homeViews":            "/javascripts/apps/home/views",
  },
  shim: {
    backbone: {
      deps: ["underscore", "jquery"]
    }
  }
});

require(["jquery", "./mainApp"],function($, mainApp){
  mainApp.initialize();
})