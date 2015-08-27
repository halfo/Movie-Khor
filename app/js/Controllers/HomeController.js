/**
 * Created by sadman on 8/25/15.
 */

movieViewer.controller("HomeController",
    function HomeController ($scope, MovieService) {
        var sendMoviesToUser = function (keyword) {
            MovieService.getMovies(keyword).then(loadMoviesToScope);
        },

        loadMoviesToScope = function (data) {
            $scope.movies = data;
        };

        $scope.search = function (keyword) {
            sendMoviesToUser(keyword);
        };
    }
);