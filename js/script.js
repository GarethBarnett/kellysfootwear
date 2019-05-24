// Showing our side menu
$( '.menu-btn' ).click(function() {
  $( '.h-menu' ).addClass( 'visible' );
});

// Hiding our side menu
$( '.close' ).click(function() {
  $( '.h-menu' ).removeClass( 'visible' );
});