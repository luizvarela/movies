require.onError = function(err) { 
  window._204 = window._204 || []; 
  window._204.push({key: 'requireErr', value: err});
};
  
require.config({
    enforceDefine: true,
    waitSeconds: 14,
    deps: ["main"],
    
    shim: {
      "underscore": {
      exports: '_'
    },
         
    "backbone": {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  },
  
  paths: {
    "jquery":       "libs/jquery",
    "underscore":   "libs/underscore",
    "backbone":     "libs/backbone"
  }
});  