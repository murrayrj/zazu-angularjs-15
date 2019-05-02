var myApp = angular.module('zazuApp');
myApp.factory('UserService', ['$http', '$q', '$auth', function ($http, $q, $auth) {
    'use strict';
    function handleSuccess(res) {
        return res.data;
    }
    function handleError(response) {
        if (!angular.isObject(response.data) || !response.data.message) {
            return ( $q.reject("An unknown error occurred.") );
        }
        return ( $q.reject(response.data.message) );
    }
    function Create(user) {
        return $auth.signup({
            username: user.username,
            email: user.email,
            telephone: user.telephone,
            password: user.password
        }).then(handleSuccess, handleError);
    }
    function Step2(data) {
        return $http({
            withCredentials: true,
            method: 'PUT',
            url: 'https://zazu.ngrok.io/register',
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(handleSuccess, handleError);
    }
    function Update(user) {
        return $http({
            method: 'PUT',
            url: 'https://zazu.ngrok.io/v1/user/' + user.id,
            data: $.param(user),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(handleSuccess, handleError);
    }

    function Delete(id) {
        $http({
            method: 'DELETE',
            url: 'https://zazu.ngrok.io/v1/user/' + id,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(handleSuccess, handleError);
    }

    var service = {};
    service.Step2 = Step2;
    service.Create = Create;
    service.Update = Update;
    service.Delete = Delete;
    return service;
}]);