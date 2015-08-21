require(['angular', 'app'], function(angular) {
  'use strict';

  // Bootstrap 'apply' module manually.
  angular.element(document).ready(function() {
    angular.bootstrap(document, ['apply']);
  });
});
