

$('.modal').on('man__trigger', function () {
    $('.modal').focus()
})
/*----------------
 tabs
 ----------------*/
$('.banner-news__info_tab').click(function (e) {
    e.preventDefault()
    $('.tab-pane').tab('show')
});



$( ".navigation__button" ).click(function() {
    $( '.header' ).toggleClass( "open" );
});



