var myApp = angular.module('zazuApp');
myApp.controller('ProduceController', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {
    'use strict';
    var getProduce;
    (getProduce = function() {
        $http.get('https://zazu.ngrok.io/v1/produce').success(function (response) {
            $scope.vegetables = response;
        }).error(function (error) {
            console.log('Error! Code ' + error.status + '. There was an error making the request.');
        });
    })()
    // $scope.vegetables = [
    //     {name: 'Beetroot', available: '100', price: "1.50", unit: 'kg', id: '1'},
    //     {name: 'Broccoli', available: '100', price: "0.99", unit: 'kg', id: '12'},
    //     {name: 'Cabbage', available: '100', price: "0.40", unit: 'head', id: '13'},
    //     {name: 'Lettuce', available: '100', price: "0.50", unit: 'head', id: '14'},
    //     // {name: 'Maize', available: '100', price: "0.90", unit: 'head'},
    //     {name: 'Red Peppers', available: '100', price: "2.25", unit: 'kg', id: '15'},
    //     {name: 'Yellow Peppers', available: '100', price: "2.25", unit: 'kg', id: '16'},
    //     {name: 'Green Peppers', available: '100', price: "0.70", unit: 'kg', id: '17'},
    //     {name: 'Potatoes', available: '100', price: "8.54", unit: '10kg', id: '18'},
    //     {name: 'Tomatoes', available: '100', price: "0.65", unit: 'kg', id: '19'}
    // ];
    $rootScope.produce = $scope.vegetables;
}]);