var myApp = angular.module('zazuApp');
myApp.controller('Step2Controller', ['$scope', '$rootScope', '$window', '$state', '$http', 'UserService', 'geolocationService', 'toastr', function ($scope, $rootScope, $window, $state, $http, UserService, geolocationService, toastr) {
    'use strict';
    $scope.user = {};
    $scope.noAddress = true;
    toastr.info('Please complete your profile to start using our platform');
    function getW3WAddress() {
        $scope.noAddress = false;
        return geolocationService.geolocate();
    }
    function registerStep2User() {
        $scope.user.country = $("#country_selector").countrySelect("getSelectedCountryData").name;
        $scope.user.w3w = $rootScope.w3w;
        $scope.user._id = $rootScope.currentUser._id;
        UserService.Step2($scope.user)
            .then(function (response) {
                console.log("put response:", response);
                // toastr.success('You are now ready to use our platform!');
                $state.go('produce');
            })
            .catch(function (error) {
                if (error === "An unknown error occurred.") {
                    toastr.error("There was an error creating a profile.");
                }
                console.log(error);
            });
    }
    $scope.getW3WAddress = getW3WAddress;
    $scope.registerStep2User = registerStep2User;
}]);