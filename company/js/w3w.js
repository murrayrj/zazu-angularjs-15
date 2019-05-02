var getWhat3WordsAddress = function (position) {
    var data = {
        key: 'LY7TGN1E',
        position: position
    };
    $.post('https://api.what3words.com/position', data, function (response) {
        document.getElementById('w3w').value = response.words[0] + "." + response.words[1] + "." + response.words[2];
    });
};

var geolocationSuccess = function (position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    var coords = lat + "," + lng;
    console.log('hello');
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