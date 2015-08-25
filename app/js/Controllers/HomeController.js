/**
 * Created by sadman on 8/25/15.
 */

(function () {
    var module = angular.module("movieViewer", []);

    var HomeController  = function ($scope, movieService) {

        var sendMoviesToUser = function (keyword) {
            $scope.keyword = keyword;
            movieService.getMovies($scope.keyword).then(loadMoviesToScope);
        };

        var loadMoviesToScope = function (response) {
            $scope.movies = response.data;
        };

    };

    module.controller("homeController", ["$scope", "$http", HomeController]);
}());