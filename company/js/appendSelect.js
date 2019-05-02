$(function () {
    'use strict';
    var counter = 0;
    var produceList = [];
    var i;
    var j;
    var w3wAddress;
    var string;
    var productObj;
    $( "#test" ).hover(function() {
        $('.modal').modal({
            show: true
        });
    }
    $('#addSelectRow').on('click', function () {
        counter++;
        if (counter < 7) {
            var row = $('<div>', { 'class': 'row'});
            row.addClass('prod-item');
            $("#produce-0").clone().attr("id","produce-" + counter).appendTo(row);
            $("#weight-0").clone().attr("id","weight-" + counter).appendTo(row);
            $("#freq-0").clone().attr("id","freq-" + counter).appendTo(row);
            row.appendTo('#listSelect');
        } else {
            $("#addSelectRow").css("display", "none");
        }
    });
    $('#submitProduce').click(function () {
        var length = $('#listSelect .row').length;
        for (j = 0; j < length; j++) {
            productObj = {};
            productObj["produce"] = $('#produce-' + j + ' select').val();
            productObj["weight"] = $('#weight-' + j + ' input').val() + $('#weight-' + j + ' select').val();
            productObj["freq"] = $('#freq-' + j + ' select').val();
            produceList.push(productObj);
        }
        console.log(produceList);
        string = "";
        w3wAddress = $('#w3w').val();
        var w3wResponse = "entry.1929573859";
        var produceResponseArray = [];
        var prod1 = 'entry.237301747';
        var weight1 = 'entry.1710902517';
        var freq1 = 'entry.704079118';
        var prod2 = 'entry.313225269';
        var weight2 = 'entry.486175144';
        var freq2 = 'entry.448052374';
        var prod3 = 'entry.746131166';
        var weight3 = 'entry.305222760';
        var freq3 = 'entry.668626792';
        var prod4 = 'entry.1236061091';
        var weight4 = 'entry.1433297261';
        var freq4 = 'entry.439500715';
        var prod5 = 'entry.800414474';
        var weight5 = 'entry.446367904';
        var freq5 = 'entry.1045002634';
        var prod6 = 'entry.1206632482';
        var weight6 = 'entry.1112765666';
        var freq6 = 'entry.2104062444';
        var prod7 = 'entry.1017027740';
        var weight7 = 'entry.1800788344';
        var freq7 = 'entry.1465560711';
        produceResponseArray.push([prod1, weight1, freq1]);
        produceResponseArray.push([prod2, weight2, freq2]);
        produceResponseArray.push([prod3, weight3, freq3]);
        produceResponseArray.push([prod4, weight4, freq4]);
        produceResponseArray.push([prod5, weight5, freq5]);
        produceResponseArray.push([prod6, weight6, freq6]);
        produceResponseArray.push([prod7, weight7, freq7]);
        var baseURL = 'https://docs.google.com/a/zazuafrica.com/forms/d/e/1FAIpQLSdD8IHVWacXvb6CYKGx2D5Ak7l0dtNaIeKAnY5IGJABpuJ-qw/formResponse?';
        var submitRef = '&submit=submit';
        for (var i = 0; i < produceList.length; i++) {
            string += "&" + produceResponseArray[i][0] + "=" + produceList[i].produce + "&" + produceResponseArray[i][1] + "=" + produceList[i].weight + "&" + produceResponseArray[i][2] + "=" + produceList[i].freq
            console.log(i);
        }
        var submitURL = (baseURL + w3wResponse + "=" + w3wAddress + string + submitRef);
        $.post(submitURL);
        $('#feedback').text('Thank You!');
    });
});