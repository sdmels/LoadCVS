define(['angular', 'appCtrl'],
  function(angular, appCtrl) {
    'use strict';

    // Define 'apply' module.
    var app = angular.module('apply', ['angularUiRouter']);
    app.controller('appCtrl', appCtrl);

    app.config([function () {

    }]);



    return app;
  });
