/**
 * Created by sadman on 8/25/15.
 */

movieViewer.controller("HomeController",
    function HomeController ($scope, MovieService, $location, $timeout) {
        var i = 1;
        var sendMoviesToUser = function () {
            MovieService.getMovies($scope.keyword).then(loadMoviesToScope);
        },

        loadMoviesToScope = function (data) {
            $scope.movies = data;
        };

        $scope.search = function () {
            sendMoviesToUser();
        };

        $scope.go = function(path) {
            $location.path(path);
        };
    }
);