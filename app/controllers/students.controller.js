(function() {
    'use strict';

    angular
        .module('controllers')
        .controller('StudentsController', StudentsController);

    function StudentsController() {

        var vm = this;

        vm.allStudents = [
        	"Yassine",
        	"Daan",
        	"Jan",
        	"Piet",
        	"Henk"
        ];

    }

})();