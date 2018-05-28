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


//TODO WENN EIGENES KRANKENHAUS -> KEINE PROZENTZAHl!


(function (I18n, $) {
    'use strict';

    function filter() {
        $('.col-md-9 tbody > tr').each(function () {
            var el = $(this);
            var beds = parseInt(el.find('td:nth-child(3)').text().trim());
            var percentage = el.find('td:nth-child(4)').text().trim();
            // The column differs in owned and alliance table

            console.log(beds);

            console.log(percentage);

            var elegible = ((el.find(':nth-child(4)').text()
                .trim().indexOf('10 %') === -1) ? el.find(
                'td:nth-child(4)').text() : el.find(
                ':nth-child(5)').text()).trim() === "Ja";
            if ((beds <= 0) || (!elegible)) {
                el.fadeOut(1);
                console.log("hallo");
            } else {
                el.show();
            }
        });
    }

    var sprechwunsch = $('#h2_sprechwunsch');
    if (sprechwunsch.length > 0 && sprechwunsch.parent().text().indexOf("Krankenhaus") >= 0) {
        filter();
    }
});
