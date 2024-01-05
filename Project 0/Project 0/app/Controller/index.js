var app = angular.module('myApp', ['ngRoute']);


app.config(['$routeProvider', function ($routeProvider) {
    console.log("I am inside router");
    $routeProvider
        .when("/", {
            templateUrl: "../app/view/signIn.html",
            controller: "signInCtrl",
        }
        )
        .when("/register", {
            templateUrl: "../app/view/register.html",
            controller: "registerCtrl",
        })
        .when("/Home", {
            templateUrl: "../app/view/Home.html",
            controller: "HomeCtrl",
        })
        .otherwise({
            templateUrl: "../app/view/signIn.html",
            controller: "signInCtrl",
        })

}])