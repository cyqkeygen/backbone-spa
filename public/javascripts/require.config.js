require.config({
  paths: {
    "jquery":         "/jquery/dist/jquery",
    "underscore":     "/underscore/underscore",
    "backbone":       "/backbone/backbone",
    "viewManager":    "viewManager",
    "text":           "/text/text",
    "store":          "store2/dist/store2"
  },
  shim: {
    backbone: {
      // deps: ["underscore", "jquery"]
    }
  }
});

require(['./mainApp'],function(mainApp){
  mainApp.initialize();
})