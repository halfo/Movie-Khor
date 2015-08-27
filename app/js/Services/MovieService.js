/**
 * Created by sadman on 8/25/15.
 */

movieViewer.factory("MovieService",
    function MovieService ($http) {
        var getMovies = function (keyword) {
            return $http.get("http://www.omdbapi.com/?s=" + keyword).then(function (response) {
                return response.data;
            });
        },

        getMovie = function (title) {
            return $http.get("http://www.omdbapi.com/?t=" + title + "&tomatoes=true").then(function (response) {
                return response.data;
            });
        };

        return {
            getMovies : getMovies,
            getMovie : getMovie
        };
    }
);