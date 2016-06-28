(function() {
    'use strict';

    angular
        .module('controllers')
        .controller('StudentsController', StudentsController);

    function StudentsController(StudentsService) {

        var vm = this;

        /*
        Een controller bestaat binnen Angular als de 'viewmodel' en 'viewcontroller' voor je HTML
        Je mag wel een paar variabelen opslaan in je controller, maar alleen de variabelen die alleen voor de HTML nodig zijn (bijvoorbeeld het bijhouden op welk tabje je hebt geklikt)
        Alle applicatie data slaan we op in een Service
         */

        // we maken de data toegankelijk voor de HTML
        // variabelen maken we op alfabet aan
        vm.allStudents = StudentsService.allStudents;
        vm.newStudent = {};

        // een 'viewcontroller' functie die het mogelijk maakt om bij te houden op welke student je hebt geklikt
        vm.setStudent = function(currentStudent){
            if(vm.currentStudent != currentStudent)
                vm.currentStudent = currentStudent;
            else
                vm.currentStudent = undefined;

        };

        // een viewcontroller functie die het mogelijk maakt om nieuwe studenten aan te maken
        // de daadwerkelijke data bewerking (iets toevoegen aan een array) doen we in een service
        vm.createStudent = function(){
            StudentsService.createStudent({
                name: vm.newStudent.name,
                age: vm.newStudent.age
            });
            // we maken newStudent weer leeg zodat de input fields ook leeg worden
            vm.newStudent = {};
        };

    }


})();