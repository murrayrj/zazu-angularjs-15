var myApp = angular.module('zazuApp');
myApp.controller('OrdersController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    "use strict";
    function getOrders() {
        $http({
            method: 'GET',
            //NOT SURE WHAT THE URL FOR GETTING ALL ORDERS FROM SUPERMARKET
            url: 'https://zazu.ngrok.io/v1/order'
        }).then(function successCallback(response) {
            $scope.orders = response.data;
            console.log("Success");
        }, function errorCallback(response) {
            console.log("Error, getting orders!");
            console.log(response);
        });
    }
    // NEED TO MORE TIME TO COMPLETE THIS (CARTDETAILS.HTML)
    function sendOrder() {
        $http({
            method: 'POST',
            url: 'https://zazu.ngrok.io/v1/order'
        }).then(function successCallback(response) {
            // $scope.orders = response.data;
            console.log("Success");
        }, function errorCallback(response) {
            console.log("Error, submitting order");
            console.log(response);
        });
    }
    function applyStatus(orderStatus) {
        switch (orderStatus) {
        case 'opened':
            return "label-default";
        case 'accepted':
            return "label-success";
        case 'rejected':
            return "label-danger";
        case 'received':
            return "label-info";
        case 'complete':
            return "label-primary";
        }
    }
    //DUMMY DATA
    $scope.orders = [
        {order_id: '123124343', created_at: '19/07/16', produce: 'potatoes', quantity: '200kg', price: "250", due_date: '24/07/16', order_status: 'opened'},
        {order_id: '123134245', created_at: '18/06/16', produce: 'potatoes', quantity: '200kg', price: "299", due_date: '27/07/16', order_status: 'rejected'}
    ];
    $scope.getOrders = getOrders;
    $scope.applyStatus = applyStatus;
}]);