/**
 * Created by sadman on 8/25/15.
 */

movieViewer.config (function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "partials/home.html",
            controller: "HomeController"
        }).when("/movie/:imdbID", {
            templateUrl: "partials/movie.html",
            controller: "MovieController"
        });
    }
);

//movieViewer.get('*', $route.routes.index);

//(function () {
//
//    var app = angular.module("movieViewer", ["ngRoute"]);
//
//    app.config (function ($routeProvider) {
//        $routeProvider.when("/home", {
//            templateUrl:"index.html",
//            controller:"HomeController"
//        }).when("movie/:imdbID", {
//            templateUrl:"../movie.html",
//            controller:"MovieController"
//        }).otherwise({redirectTo:"/home"});
//    })
//
//}());