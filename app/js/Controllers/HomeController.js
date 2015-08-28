/**
 * Created by sadman on 8/25/15.
 */

movieViewer.controller("HomeController",
    function HomeController ($scope, MovieService, $location, $timeout) {
        var i = 1;
        var sendMoviesToUser = function () {
                console.log(i); i+=1;
            MovieService.getMovies($scope.keyword).then(loadMoviesToScope);
        },

        loadMoviesToScope = function (data) {
            $scope.movies = data;
        };

        $scope.search = function () {
            $timeout(sendMoviesToUser, 1000);
        };

        $scope.go = function(path) {
            $location.path(path);
        };
    }
);