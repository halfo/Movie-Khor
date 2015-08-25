/**
 * Created by sadman on 8/25/15.
 */

(function () {

    var app = angular.module("movieViewer", ["ngRoute"]);

    app.config (function ($routeProvider) {
        $routeProvider.when("/home", {
            templateUrl:"index.html",
            controller:"HomeController"
        }).when("movie/:imdbID", {
            templateUrl:"movie.html",
            controller:"MovieController"
        }).otherwise({redirectTo:"/home"});
    })

}());