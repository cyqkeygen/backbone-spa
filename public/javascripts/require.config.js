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
    "homeApp":              "/javascripts/apps/home/app",
    "articleApp":           "/javascripts/apps/articles/app",
    "articleCollctions":    "/javascripts/apps/articles/app/collections",
    "articleModels":        "/javascripts/apps/articles/app/models",
    "articleTemplates":     "/javascripts/apps/articles/app/templates",
    "articleViews":         "/javascripts/apps/articles/app/views",
    "homeCollctions":       "/javascripts/apps/home/app/collections",
    "homeModels":           "/javascripts/apps/home/app/models",
    "homeTemplates":        "/javascripts/apps/home/app/templates",
    "homeViews":            "/javascripts/apps/home/app/views",
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