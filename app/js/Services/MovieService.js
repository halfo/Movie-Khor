/**
 * Created by sadman on 8/25/15.
 */

movieViewer.factory("MovieService",
    function MovieService ($http) {
        var getMovies = function (keyword) {
            return $http.get("http://www.omdbapi.com/?s=" + keyword).then(function (response) {
                return response.data;
            });
        };

        var getMovie = function (id) {
            return $http.get("http://www.omdbapi.com/?i=" + id + "&tomatoes=true").then(function (response) {
                return response.data;
            });
        };

        return {
            getMovies : getMovies,
            getMovie : getMovie
        };
    }
);

//(function () {
//
//    var MovieService = function ($http) {
//
//        var getMovies = function (keyword) {
//            return $http.get("http://www.omdbapi.com/?s=" + keyword).then(function (response) {
//                return response.data;
//            });
//        };
//
//        var getMovie = function (id) {
//            return $http.get("http://www.omdbapi.com/?i=" + id + "&tomatoes=true").then(function (response) {
//                return response.data;
//            });
//        };
//
//        return {
//            getMovies : getMovies,
//            getMovie : getMovie
//        };
//    };
//
//    var module = angular.module("movieViewer");
//    module.factory("movieService", MovieService);
//
//}());