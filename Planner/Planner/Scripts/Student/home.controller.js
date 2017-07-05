(function () {

    'use strict';

    angular
        .module('Planner')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.inject = ['Planner'];

    function HomeCtrl(Planner, $q, $scope) {

        // Page Variables:
        var vm = this;

        vm.getSteps = getSteps;
        vm.getAssignment = getAssignment;

        var promises = [getAPI(), getTask(), getClass()];
        $q.all(promises);

        vm.status = false;
        setTimeout(function () { getSteps("ITM%20320"); }, 3000);

        function getAPI() {
            return Planner.getAPI()
            .then(function (result) {
                vm.result = result.data;
            });
        }

        function getTask() {
            return Planner.getTask()
            .then(function (result) {
                vm.task = result.data;
            })
        }

        function getClass() {
            return Planner.getClass()
            .then(function (result) {
                vm.class = result.data;
            })
        }

        function getAssignment(stepID) {
            return Planner.getAssignment(stepID)
            .then(function (result) {
                vm.info = result.data;
            })
        }

        function getSteps(stepID) {
            getAssignment(stepID);
            return Planner.getSteps(stepID)
            .then(function (result) {
                vm.step = result.data;
            })
        }

    }

})();