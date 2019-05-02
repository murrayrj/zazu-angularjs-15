var myApp = angular.module('zazuApp');
myApp.controller('RegisterController', ['$scope', '$rootScope', '$http', '$window', 'UserService','geolocationService', function ($scope, $rootScope, $http, $window, UserService, geolocationService) {
    'use strict';
    $scope.user = {};
    $scope.noAddress = true;
    function registerUser() {
        $scope.user.telephone = $("#phone").intlTelInput("getNumber");
        UserService.Create($scope.user)
            .then(function () {
                console.log('success');
            })
            .catch(function (error) {
                console.log('error');
            });
        $window.location.href = '/#/register/2';
    }
    function getW3WAddress() {
        $scope.noAddress = false;
        return geolocationService.geolocate();
    }
    function registerStep2User() {
        $scope.user.country = $("#country_selector").countrySelect("getSelectedCountryData").name;
        UserService.Create($scope.user)
            .then(function () {
                console.log($scope.user);
                console.log('success');
            })
            .catch(function (error) {
                console.log('error');
            });
    }
    function saveUser() {
        $scope.user.telephone = $("#phone").intlTelInput("getNumber");
        UserService.Update($scope.user)
            .then(function () {
                console.log('success');
            })
            .catch(function (error) {
                console.log('error');
            });
    }
    function deleteUser() {
        UserService.Delete($scope.user.id)
            .then(function () {
                // log user out
                console.log('success');
                $window.location = '/login';
            })
            .catch(function (error) {
                console.log('error');
            });
    }
    $scope.registerUser = registerUser;
    $scope.getW3WAddress = getW3WAddress;
    $scope.registerStep2User = registerStep2User;
    $scope.saveUser = saveUser;
    $scope.deleteUser = deleteUser;
}]);