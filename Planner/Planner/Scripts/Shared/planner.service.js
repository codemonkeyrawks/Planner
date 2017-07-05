(function () {

    'use strict';

    angular
        .module('Planner')
        .factory('Planner', Planner)

    Planner.inject = ['$http'];

    function Planner($http) {

        var server = "http://localhost:8000/";
        //var server = "http://108.61.207.78/";

        return {
            getAPI: getAPI,
            getTask: getTask,
            getClass: getClass,
            postAssignmentName: postAssignmentName,
            getAssignment: getAssignment,
            getSteps: getSteps
        };

        // GET: API
        function getAPI() {
            return $http.get(server + "api", { cache: false });
        }

        // GET: getTask
        function getTask() {
            return $http.get(server + "getTask", { cache: false });
        }

        // GET: getClass
        function getClass() {
            return $http.get(server + "getClass", { cache: false });
        }

        // POST: postAssignmentName
        function postAssignmentName(title, date1, date2, steps) {
            $http.post(server + "postAssignmentName" + "?courseID=" + "10000004" + "&title=" + title + "&time1=" + date1 + "&time2=" + date2 + "&steps=" + steps, { cache: false });
        }

        // GET: getAssignment
        function getAssignment(stepID) {
            return $http.get(server + "getAssignment" + "?input=" + stepID, { cache: false });
        }

        // GET: getSteps
        function getSteps(stepID) {
            return $http.get(server + "getSteps" + "?input=" + stepID , { cache: false });
        }

    }

})();