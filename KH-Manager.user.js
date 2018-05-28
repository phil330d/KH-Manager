// ==UserScript==
// @name         KH-Filter
// @version      1.0
// @description  Filtert alle nicht geeigneten Krankenhäuser
// @author       phil330d
// @include      *://www.leitstellenspiel.de/
// @include      *://www.leitstellenspiel.de/*
// @grant        none
//@run           document-start
// ==/UserScript==


//TODO WENN EIGENES KRANKENHAUS -> KEINE PROZENTZAHl!


(function($) {
    'use strict';
    function filter() {
        $('.col-md-9 tbody > tr').each(function() {
            var el = $(this);
            var beds = parseInt(el.find('td:nth-child(3)').text().trim());
            var percent = el.find('td:nth-child(4)').text.trim();

            var elegible = ((el.find(':nth-child(4)').text()
                    .trim().indexOf('%') === -1) ? el.find(
                        'td:nth-child(4)').text() : el.find(
                        ':nth-child(5)').text()).trim() === "Ja";
            if (beds < 1 || !elegible) {
                el.hide();
            } else {
                el.show();
            }
        });
    }

    var sprechwunsch = $('#h2_sprechwunsch');
    if (sprechwunsch.length > 0 && sprechwunsch.parent().text().indexOf("Krankenhaus") > 0) {
        filter();
    }

})(jQuery);
