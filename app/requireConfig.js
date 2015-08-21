require.config({
  deps: ['main.js'],
  waitSeconds: 10,

  paths: {
    'jquery': 'libs/bower/jquery/dist/jquery',
    'underscore': 'libs/bower/underscore/underscore',
    'angular': 'libs/bower/angular/angular',
    'angularUiRouter': 'libs/bower/angular-ui-router/release/angular-ui-router'
  },

  map: {
    '*': {
      '$': 'jquery',
      '_': 'underscore'
    }
  },

  // Declare dependencies for non AMD scripts.
  shim: {
    'jquery': {
      exports: '$'
    },
    'underscore': {
      exports: '_'
    },
    'angular': {
      deps: ['jquery'],
      exports: 'angular'
    },
    'angularUiRouter': {
      deps: ['angular']
    },
    'uiBootstrap': {
      deps: ['angular']
    }
  }
});