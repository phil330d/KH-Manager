// ==UserScript==
// @name         KH-Filter
// @version      1.0
// @description  Filtert alle nicht geeigneten Krankenhäuser
// @author       phil330d
// @match        http://leitstellenspiel.de/*
// @include *://www.leitstellenspiel.de/
// @include *://www.leitstellenspiel.de/*
// @grant        none
// ==/UserScript==


(function ($) {
    'use strict';

    function filter() {
        $('.col-md-9 tbody > tr').each(function () {
            var el = $(this);
            var beds = parseInt(el.find('td:nth-child(3)').text().trim());
            var percentage = el.find('td:nth-child(4)').text().trim();
            var arrow = el.find('td:nth-child(1)').text().trim();
           
            console.log(beds);

            console.log(percentage);

            var elegible = ((el.find(':nth-child(4)').text()
                .trim().indexOf('10 %') === -1) ? el.find(
                'td:nth-child(4)').text() : el.find(
                ':nth-child(5)').text()).trim() === "Ja";
            if ((beds <= 0) || (!elegible)) {
                el.hide();
            } else {
                el.show();
            }

            if (arrow === "↓") el.show();
        });
    }

    var sprechwunsch = $('#h2_sprechwunsch');
    if (sprechwunsch.length > 0 && sprechwunsch.parent().text().indexOf("Krankenhaus") >= 0) {
        filter();
    }
});
