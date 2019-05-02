$("#phone").intlTelInput({
    utilsScript: "assets/libs/utils.js",
    autoPlaceholder: true,
    geoIpLookup: function(callback) {
      $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
        var countryCode = (resp && resp.country) ? resp.country : "";
        callback(countryCode);
      });
    },
    initialCountry: "zw",
    preferredCountries: ['mw', 'na','za', 'zm', 'zw'],
});
var telInput = $("#phone"),
errorMsg = $("#error-msg"),
validMsg = $("#valid-msg");

var reset = function() {
  telInput.removeClass("error");
  errorMsg.addClass("hide");
  validMsg.addClass("hide");
};

// on blur: validate
telInput.blur(function() {
  reset();
  if ($.trim(telInput.val())) {
    if (telInput.intlTelInput("isValidNumber")) {
      validMsg.removeClass("hide");
    } else {
      telInput.addClass("error");
      errorMsg.removeClass("hide");
    }
  }
});

// on keyup / change flag: reset
telInput.on("keyup change", reset);

$( "#phone" ).keypress(function() {
  if (!$('#error-msg').hasClass('hide')) {
    $('#phone').css({ border: '1px solid #a94442' });
  } else if ($('#error-msg').hasClass('hide')) {
    $('#phone').css({ border: '1px solid #ccc' });
  }
});