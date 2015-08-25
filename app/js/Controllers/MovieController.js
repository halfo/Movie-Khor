/**
 * Created by sadman on 8/25/15.
 */

movieViewer.controller("MovieController",
    function MovieController ($scope, movieService, $routeParams) {
        var sendMovieDetails = function(response) {
            $scope.movieDetails = response.data;
        };

        $scope.id = $routeParams.imdbID;
        movieService.getMovie($scope.id).then(sendMovieDetails);
    }
);

//(function () {
//
//    var module = angular.module("movieViewer");
//
//    var MovieController = function ($scope, movieService, $routeParams) {
//
//        var sendMovieDetails = function(response) {
//            $scope.movieDetails = response.data;
//        };
//
//        $scope.id = $routeParams.imdbID;
//        movieService.getMovie($scope.id).then(sendMovieDetails);
//    }
//
//    module.controller("movieController", MovieController);
//
//}());