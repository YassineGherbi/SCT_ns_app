(function() {
    'use strict';

    angular
        .module('stations.services')
        .service("StationsService", StationsService);

    function StationsService($http) {
        var self = this;

        // we houden de data netjes bij in de service
        // onze service is nu een 'model' voor onze app
        self.allStations = [];

        $http.get('data/trainstations.json').then(function(stations){
            // we maken eerst de data leeg
            self.allStations.length = 0;
            // en stoppen vervolgens de geladen data in de allStations array
            // dit zorgt ervoor dat we nog steds met dezelfde array werken
            angular.extend(self.allStations, stations.data);
        });
    }
})();
