angular.module("manutencaoApp").config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");

    $routeProvider.when("/login", {
        templateUrl: "view/login.html",
        controller: "loginController"
    });

    $routeProvider.when("/app", {
        templateUrl: "view/app.html",
        controller: "appController"
    })

    $routeProvider.otherwise({
        redirectTo: "/login"
    });
});