var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
    // ---- HOME ----
        .state('home', {
            url: '/home',
            templateUrl: '../views/home/home.html'
        })
        // nested list with custom controller
        .state('home.first-nested-content', {
            url: '/first-nested-content',
            templateUrl: '../views/home/nested/first-nested-content.html',
            controller: function ($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })
        // nested list with just some random string data
        .state('home.other-content', {
            url: '/other-content',
            templateUrl: '../views/home/nested/other-content.html',
            controller: function ($scope) {
                $scope.animals = ['Cat', 'Dog', 'Elephant'];
            }
        })
    // ---- ABOUT ----
        .state('about', {
            url: '/about',
            templateUrl: '../views/about/about.html'
        })
    // ---- CONTRACT ----
        .state('contract', {
            url: '/contract',
            templateUrl: '../views/contract/contract.html'
        });
});