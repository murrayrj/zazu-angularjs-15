var myApp = angular.module('zazuApp');
myApp.controller('SearchController', ['$scope', '$state', '$http', function ($scope, $state, $http) {
    'use strict';
    $scope.keyword = "";
    function searchProduce() {
        if ($scope.keyword !== "") {
            $http.get('https://zazu.ngrok.io/v1/search/' + $scope.keyword).success(function (data, status, headers, config) {
                console.log("Search results found!");
                console.log(data);
            }).error(function (data, status, headers, config) {
                console.log("Something failed! No results found!");
            });
        }
    }
    $scope.searchProduce = searchProduce;
}]);