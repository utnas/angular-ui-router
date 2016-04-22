var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
    // ---- HOME ----
        .state('home', {
            url: '/home',
            templateUrl: '../views/pages/home/home.html'
        })
        // nested list with custom controller
        .state('home.first-nested-content', {
            url: '/first-nested-content',
            templateUrl: '../views/pages/home/nested/first-nested-content.html',
            controller: function ($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })
        // nested list with just some random string data
        .state('home.other-content', {
            url: '/other-content',
            templateUrl: '../views/pages/home/nested/other-content.html',
            controller: function ($scope) {
                $scope.animals = ['Cat', 'Dog', 'Elephant'];
            }
        })
    // ---- ABOUT ----
        .state('about', {
            url: '/about',
            templateUrl: '../views/pages/about.html'
        })
    // ---- CONTRACT ----
        .state('contract', {
            url: '/contract',
            templateUrl: '../views/pages/contract.html'
        });
});