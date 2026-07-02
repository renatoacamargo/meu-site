/*
* @author: Robson Gomes de Araújo Júnior;
* @description: rotate links and generate iframe;
* @date: 16/07/2013;
* @update: 17/07/2013;
* @email: robson.ga.junior@gmail.com
* */

var linkRotate, iframeLoadHeight;

iframeLoadHeight = function(){
    var wh;

    wh = window.innerHeight;
    jQuery('iframe').css('height', wh);
};

linkRotate = function(){

    jQuery('#urlList').hide();

    var createIframe, atual, el, countLink, time, elTime;

    el = jQuery('#urlList').find('li');
    elTime = jQuery('#time');
    countLink =  el.length;
    atual = 0;

    createIframe = function(create){
        jQuery('body').html('<iframe width="100%" frameborder="0" src="'+create+'"></iframe>');
        iframeLoadHeight();
    };

    printF = function(){
        var getFtxt;
        getFtxt = el.eq(atual).text();
        createIframe(getFtxt);

    };printF();

    printN = function(){
        atual++;
        atual = atual >=  countLink ? 0 : atual;
        printF();
    };

    time = elTime.text();
    setInterval(printN, time);
};

jQuery(document).ready(linkRotate);
jQuery(window).resize(iframeLoadHeight);