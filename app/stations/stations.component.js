// Register the `stations` component on the `stations` module,
angular.
  module('stations').
  component('stations', {
    // Note: The URL is relative to our `index.html` file
    templateUrl: 'index.html',
    controller: 'stations.controller'
  });
