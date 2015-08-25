/**
 * Created by sadman on 8/25/15.
 */

(function () {

    var MovieService = function ($http) {

        var getMovies = function (keyword) {
            return $http.get("http://www.omdbapi.com/?s=" + keyword).then(function (response) {
                return response.data;
            });
        };

        return {
            getMovies : getMovies
        };
    };

    var module = angular.module("movieViewer");
    module.factory("movieService", MovieService);

}());