/**
 * Created by sadman on 8/25/15.
 */

movieViewer.controller("MovieController",
    function MovieController ($scope, MovieService, $routeParams) {
        var sendMovieDetails = function (data) {
            $scope.movieDetails = data;
        };

        MovieService.getMovie($routeParams.imdbID).then(sendMovieDetails);
    }
);