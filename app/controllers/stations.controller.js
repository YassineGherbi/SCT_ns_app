(function() {
    'use strict';

    angular
        .module('controllers')
        .controller('StationsController', StationsController);

    function StationsController($http) {

        var vm = this;

        vm.setCurrentStation = function(currentStation){ 
            if(currentStation != vm.currentStation)
                vm.currentStation = currentStation;
            else
                vm.currentStation = undefined;
        }

        $http.get("http://localhost/MA/SCT/sct_ns_app/data/stations.json").then(function(response) {
            vm.stations = response.data;
        });

    }

})();