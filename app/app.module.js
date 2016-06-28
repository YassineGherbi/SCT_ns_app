(function() {
    'use strict';

    // Define the `nsApp` module
    angular.module('nsApp', [
      // ...which depends on the `stations` module
      'stations',
      'ngAnimate',
      'uiGmapgoogle-maps'
    ]);

})();
