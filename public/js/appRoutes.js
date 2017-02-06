 angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // nerds page that will use the NerdController
        .when('/matches', {
            templateUrl: 'views/matches.html',
            controller: 'MatchController'
        })

        .when('/', {
            templateUrl: "views/login.html",
            controller: 'LoginController'
        })

        .when('/register', {
            templateUrl: "views/register.html",
            controller: 'RegisterController'
        })

        .when('/myProfile', {
            templateUrl: 'views/myMatches.html',
            controller: 'MyMatchesController'
        });

    $locationProvider.html5Mode(true);

}]);