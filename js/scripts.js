

$('#modalVideo').on('man__trigger', function () {
    $('#modalVideo').focus()
});
$('#modalTariff').on('footer__link', function () {
    $('#modalTariff').focus()
});
/*----------------
 tabs
 ----------------*/
$('.banner-news__info_tab').click(function (e) {
    e.preventDefault()
    $('.tab-pane').tab('show')
});



$( ".checkbox" ).click(function() {
    $( '.checkbox' ).toggleClass( "active" );
});



