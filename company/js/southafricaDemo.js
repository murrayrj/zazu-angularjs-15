$('#demo-form').on('submit', function () {
    'use strict';
    // if ($('#telephone').val() === '') {
    //     $('#demo-feedback').text('Please enter a telephone number.');
    // } else {
        var first = encodeURIComponent($('#first_name').val());
        var last = encodeURIComponent($('#last_name').val());
        var job = encodeURIComponent($('#job').val());
        var company = encodeURIComponent($('#company').val());
        var tel = encodeURIComponent($('#telephone').val());
        var email = encodeURIComponent($('#email').val());
        var firstID = "entry.719994038";
        var lastID = "entry.265608402";
        var jobID = "entry.126363677";
        var companyID = "entry.827520020";
        var telID = "entry.1015326060";
        var emailID = "entry.965206029";
        var baseURL = 'https://docs.google.com/a/zazuafrica.com/forms/d/1eXFGVGH9cMDy8scBWkHg21yx9I4zy1t2bAIwV2ofYs0/formResponse?';
        var submitRef = '&submit=submit';
        var submitURL = (baseURL + firstID + "=" + first + "&" + lastID + "=" + last + "&" + jobID + "=" + job + "&" + companyID + "=" + company + "&" + telID + "=" + tel + "&" + emailID + "=" + email + submitRef);
        console.log(submitURL);
        $(this)[0].action = submitURL;
        $('#demo-feedback').text('Thank You! We will be in touch shortly.');
        $('#first_name').val('');
        $('#last_name').val('');
        $('#job').val('');
        $('#company').val('');
        $('#telephone').val('');
        $('#email').val('');
        first = "";
        last = "";
        job = "";
        company = "";
        tel = "";
        email = "";
    // }
});