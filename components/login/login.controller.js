var myApp = angular.module('zazuApp');
myApp.controller('LoginController', ['$scope', '$http', '$window', '$auth', '$state', '$rootScope', 'toastr', function ($scope, $http, $window, $auth, $state, $rootScope, toastr) {
    'use strict';
    $scope.login = function () {
        $auth.login({
            username: $scope.username,
            password: $scope.password
        }).then(function (response) {
            console.log("res:", response);
            $window.localStorage.currentUser = JSON.stringify(response.data.user);
            toastr.success('You have successfully signed in!');
            $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
            $state.go('produce');
        }).catch(function (response) {
            $scope.errorMessage = {};
            angular.forEach(response.data.message, function (message, field) {
                $scope.loginForm[field].$setValidity('server', false);
                $scope.errorMessage[field] = response.data.message[field];
            });
        });
    };
    $scope.logout = function () {
        $auth.logout();
        delete $window.localStorage.currentUser;
        toastr.info('You have been logged out');
        $state.go('login');
        console.log('logout');
    };
}]);