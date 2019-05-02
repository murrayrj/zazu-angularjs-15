var myApp = angular.module('zazuApp');
myApp.factory('Auth', ["$cookies", function($cookies) {
    'use strict';
    var currentUser = $cookies.get('user') || null;
    return {
        setUser: function (user) {
            $cookies.put('user', user);
            currentUser = $cookies.get('user');
        },
        isLoggedIn: function () {
            // if (user === undefined) {
            //     user = currentUser;
            // }
            return currentUser ? true : false;
        }
    }
}]);