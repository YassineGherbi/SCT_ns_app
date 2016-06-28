(function() {
    'use strict';

    angular
        .module('stations.controller')
        .controller('StationsController', StationsController);

    function StationsController(StationsService) {

        var vm = this;

        /*
        Een controller bestaat binnen Angular als de 'viewmodel' en 'viewcontroller' voor je HTML
        Je mag wel een paar variabelen opslaan in je controller, maar alleen de variabelen die alleen voor de HTML nodig zijn (bijvoorbeeld het bijhouden op welk tabje je hebt geklikt)
        Alle applicatie data slaan we op in een Service
         */

        // we maken de data toegankelijk voor de HTML
        // variabelen maken we op alfabet aan
        vm.allStations = StationsService.allStations;

        vm.map = { center: { latitude: 52, longitude: 5.5 }, zoom: 7 };

        // een 'viewcontroller' functie die het mogelijk maakt om bij te houden op welke student je hebt geklikt
        vm.setCurrentStation = function(currentStation){
            if(vm.currentStation != currentStation)
                vm.currentStation = currentStation;
            else
                vm.currentStation = undefined;
        };

    }

})();
