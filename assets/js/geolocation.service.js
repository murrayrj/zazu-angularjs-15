var myApp = angular.module('zazuApp');
myApp.service('geolocationService', ["$rootScope", function($rootScope) {
    var map;
    var w3wcoords;
    function initMap() {
        var myLatLng = {lat: -17.832781, lng: 31.084197};
        map = new google.maps.Map(document.getElementById('map'), {
            center: myLatLng,
            zoom: 11
        });
        // var marker = new google.maps.Marker({
        //     position: myLatLng,
        //     map: map,
        //     title: 'Hello World!'
        // });
    }

    var getWhat3WordsAddress = function (position) {
        var data = {
            key: 'LY7TGN1E',
            position: position
        };
        $.post('https://api.what3words.com/position', data, function (response) {
            w3wcoords = response.words[0] + "." + response.words[1] + "." + response.words[2];
            document.getElementById('w3w').value = w3wcoords;
            $rootScope.w3w = w3wcoords;
        });
    };

    var geolocationSuccess = function (position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        var coords = lat + "," + lng;
        getWhat3WordsAddress(coords);
    };

    var tryAPIGeolocation = function () {
        jQuery.post("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyC6hIkv32HrtRa7PfjZlzfy_JgoMeQyMWE", function (success) {
            geolocationSuccess({coords: {latitude: success.location.lat, longitude: success.location.lng}});
        }).fail(function (err) {
            console.log("API Geolocation error! \n\n" + err);
        });
    };

    var browserGeolocationFail = function (error) {
        switch (error.code) {
        case error.TIMEOUT:
            console.log("Browser geolocation error !\n\nTimeout.");
            break;
        case error.PERMISSION_DENIED:
            if (error.message.indexOf("Only secure origins are allowed") === 0) {
                tryAPIGeolocation();
            }
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("Browser geolocation error !\n\nPosition unavailable.");
            break;
        }
    };

    var tryGeolocation = function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                geolocationSuccess,
                browserGeolocationFail,
                {maximumAge: 50000, timeout: 20000, enableHighAccuracy: true}
            );
        }
    }
    return {
        geolocate: function () {
            return tryGeolocation();
        }
    };
}]);