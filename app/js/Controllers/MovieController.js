/**
 * Created by sadman on 8/25/15.
 */

movieViewer.controller("MovieController",
    function MovieController ($scope, MovieService, $routeParams) {
        var sendMovieDetails = function (data) {
            $scope.movieDetails = data;
        };

        $scope.id = $routeParams.imdbID;
        MovieService.getMovie($scope.id).then(sendMovieDetails);
    }
);