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
        var firstID = "entry.401029825";
        var lastID = "entry.1921399776";
        var jobID = "entry.133050151";
        var companyID = "entry.801377460";
        var telID = "entry.88011388";
        var emailID = "entry.212369558";
        var baseURL = 'https://docs.google.com/a/zazuafrica.com/forms/d/e/1FAIpQLSdpLMPLZRqLivMfMz4q0yCxB3mAwqSkrf9zII2nw71hrKX0Cg/formResponse?';
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