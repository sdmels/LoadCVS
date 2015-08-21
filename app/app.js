define(['angular', 'appCtrl'],
  function(angular, appCtrl) {
    'use strict';

    // Define 'apply' module.
    var app = angular.module('apply', []);
    app.controller('appCtrl', appCtrl);

    return app;
  });
