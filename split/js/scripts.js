
$('#modalVideo').on('man__trigger', function () {
    $('#modalVideo').focus()
});
$('#modalTariff').on('footer__link', function () {
    $('#modalTariff').focus()
});
$('#modalAgreement').on('checkbox__label', function () {
    $('#modalAgreement').focus()
});


/*----------------
 scroll
 ----------------*/
$(window).load(function(){
    $(".getScroll").mCustomScrollbar({
        theme:"dark"
    });
    $(window).resize(function() {
        if(window.innerWidth > 768) {
            initCustomScrollbar();
        } else {
            $('.getScroll').mCustomScrollbar("destroy");
        }
    });
});


setwidth = ($('.man').width() / -2);
$( ".man" ).add().css( "margin-right", setwidth );




/*$( ".checkbox" ).click(function() {
    $( '.checkbox' ).toggleClass( "active" );
});*/



