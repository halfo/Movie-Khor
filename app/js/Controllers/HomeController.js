/**
 * Created by sadman on 8/25/15.
 */

(function () {
    var module = angular.module("movieViewer", []);

    var HomeController  = function ($scope) {

        var sendMoviesToUser = function (keyword) {
            $scope.keyword = keyword;
        };



    };

    module.controller("HomeController", ["$scope", "$http", HomeController]);
}());