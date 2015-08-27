/**
 * Created by sadman on 8/25/15.
 */

movieViewer.config (function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "partials/home.html",
            controller: "HomeController"
        }).when("/movie/:Title", {
            templateUrl: "partials/movie.html",
            controller: "MovieController"
        }).otherwise({redirectTo:"/home"});
    }
);