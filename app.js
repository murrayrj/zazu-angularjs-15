angular.module("zazuApp", ['ngRoute', 'ui.router', 'toastr', 'satellizer']);
var myApp = angular.module('zazuApp');
myApp.config(function(toastrConfig) {
  angular.extend(toastrConfig, {
    autoDismiss: false,
    containerId: 'toast-container',
    maxOpened: 1,
    newestOnTop: true,
    positionClass: 'toast-top-center',
    preventDuplicates: true,
    preventOpenDuplicates: true,
    target: 'body'
  });
});

myApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$authProvider', function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $authProvider) {
    'use strict';
    $locationProvider.hashPrefix();
    $authProvider.loginUrl = '/api/authenticate';
    $httpProvider.defaults.withCredentials = true;
    // if(window.history && window.history.pushState){
    //     $locationProvider.html5Mode(true);
    // }
    $stateProvider
        .state('login', {
            url: '/login',
            controller: 'LoginController',
            templateUrl: 'components/login/login.view.html',
            data: {
              requireLogin: false
            }
        })
        .state('step1', {
            url: '/register',
            controller: 'Step1Controller',
            templateUrl: 'components/step1/step1.view.html',
            data: {
              requireLogin: false
            }
        })
        .state('step2', {
            url: '/register/2',
            controller: 'Step2Controller',
            templateUrl: 'components/step2/step2.view.html',
            data: {
              requireLogin: false
            }
        })
        .state('settings', {
            url: '/settings',
            views: {
              '': {
                controller: 'RegisterController',
                templateUrl: 'components/register/settings.view.html',
              },
              'search@settings': {
                controller: 'SearchController',
                templateUrl: 'components/search/search.view.html',
              },
              'cart@settings': {
                controller: 'CartController',
                templateUrl: 'components/cart/cart.view.html',
              },
            },
            data: {
              requireLogin: true
            }
        })
        .state('orders', {
            url: '/orders',
            views: {
              '': {
                controller: 'OrdersController',
                templateUrl: 'components/orders/orders.view.html',
              },
              'search@orders': {
                controller: 'SearchController',
                templateUrl: 'components/search/search.view.html',
              },
              'cart@orders': {
                controller: 'CartController',
                templateUrl: 'components/cart/cart.view.html',
              },
            },
            data: {
              requireLogin: true
            }
        })
        .state('cartDetails', {
            url: '/cartDetails',
            views: {
              '': {
                controller: 'CartController',
                templateUrl: 'components/cart/cartDetails.view.html',
              },
              'search@cartDetails': {
                controller: 'SearchController',
                templateUrl: 'components/search/search.view.html',
              },
              'cart@cartDetails': {
                controller: 'CartController',
                templateUrl: 'components/cart/cart.view.html',
              },
            },
            data: {
              requireLogin: true
            }
        })
        .state('produce', {
            url: '/produce',
            views: {
              '': {
                controller: 'ProduceController',
                templateUrl: 'components/produce/produce.view.html',
              },
              'search@produce': {
                controller: 'SearchController',
                templateUrl: 'components/search/search.view.html',
              },
              'cart@produce': {
                controller: 'CartController',
                templateUrl: 'components/cart/cart.view.html',
              },
            },
            data: {
              requireLogin: true
            }
        })
        $urlRouterProvider.otherwise("/produce");
        $authProvider.loginUrl = 'https://zazu.ngrok.io/login';
        $authProvider.signupUrl = 'https://zazu.ngrok.io/register';
}]);

// myApp.run(['$state', '$stateParams', function($state, $stateParams) {
//         //this solves page refresh and getting back to state
// }]);
myApp.run(['$rootScope', '$state', '$auth', '$window', function ($rootScope, $state, $auth, $window) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
        var requireLogin = toState.data.requireLogin;
        if ($auth.isAuthenticated()) {
            $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
        } else if (requireLogin && !$auth.isAuthenticated()) {
            console.log('DENY');
            event.preventDefault();
            $state.go('login');
        }
    });
}]);

myApp.controller('NavBarController', ['$scope', '$window', '$auth', function ($scope, $window, $auth) {
    $scope.redirect = function(){
        $window.location.href = 'http://zazuafrica.com/company';
    };
    $scope.isAuthenticated = function() {
        return $auth.isAuthenticated();
    };
}])

myApp.factory("DataService", function () {
    var myStore = new store();
    var storeDetails = new detailsprod();
    var myCart = new shoppingCart("YourStore");
    return {
        store: myStore,
        cart: myCart,
        detailsprod: storeDetails
    };
});