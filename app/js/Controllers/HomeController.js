/**
 * Created by sadman on 8/25/15.
 */

movieViewer.controller("HomeController",
    function HomeController ($scope, MovieService) {
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
    }
);