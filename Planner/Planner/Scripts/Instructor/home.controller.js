(function () {

    'use strict';

    angular
        .module('Planner')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.inject = ['Planner'];

    function HomeCtrl(Planner, $q, $scope) {

        // Page Variables:
        var vm = this;
        
        // Links:
        vm.submit = postAssignmentName;

        var promises = [getAPI(), getTask(), getClass()];
        $q.all(promises);

        vm.status = false;

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

        function postAssignmentName(title, dateid1, dateid2, steps) {

            var date0 = new Date(dateid1)
            var date1 = date0.getMonth() + 1;
            var date2 = date0.getDate();
            var date3 = date0.getFullYear();

            var date4 = new Date(dateid2)
            var date5 = date4.getMonth() + 1;
            var date6 = date4.getDate();
            var date7 = date4.getFullYear();

            var result1 = date1 + "/" + date2 + "/" + date3;
            var result2 = date5 + "/" + date6 + "/" + date7;

            Planner.postAssignmentName(title, result1, result2, steps);

            $scope.assignment = "";
            $scope.time1 = "";
            $scope.time2 = "";
            $scope.area1 = "";

        }

    }

})();