/**
 * Created by sadman on 8/25/15.
 */

movieViewer.controller("MovieController",
    function MovieController ($scope, MovieService, $routeParams) {
        $scope.id = $routeParams.imdbID;
        MovieService.getMovie($scope.id).then(sendMovieDetails);

        var sendMovieDetails = function(data) {
            $scope.movieDetails = data;
        };
    }
);