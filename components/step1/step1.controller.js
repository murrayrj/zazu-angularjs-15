var myApp = angular.module('zazuApp');
myApp.controller('Step1Controller', ['$scope', '$state', 'UserService', 'toastr', '$auth', '$window', '$rootScope', function ($scope, $state, UserService, toastr, $auth, $window, $rootScope) {
    'use strict';
    $scope.user = {};
    function registerUser() {
        $scope.user.telephone = $("#phone").intlTelInput("getNumber");
        UserService.Create($scope.user)
            .then(function (res) {
                console.log(res);
                $auth.setToken(res.token);
                $window.localStorage.currentUser = JSON.stringify(res.user);
                $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
                $rootScope.currentUser._id = res.user._id;
                toastr.success('You have successfully created a new account!');
                $state.go('step2');
            })
            .catch(function (error) {
                if (error === "An unknown error occurred.") {
                    toastr.error("There was an error creating your profile.");
                }
                console.log(error);
            });
    }
    $scope.registerUser = registerUser;
}]);