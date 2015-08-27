/**
 * Created by sadman on 8/25/15.
 */

movieViewer.controller("HomeController",
    function HomeController ($scope, MovieService, $location) {
        var sendMoviesToUser = function (keyword) {
            console.log("in func 1");
            $scope.keyword = keyword;
            MovieService.getMovies($scope.keyword).then(loadMoviesToScope);
        },

        loadMoviesToScope = function (data) {
            $scope.movies = data;
        };

        $scope.search = function (keyword) {
            console.log(keyword);
            sendMoviesToUser(keyword);
        };

        $scope.go = function(path) {
            //console.log(path);
            $location.path(path);
        };
    }
);