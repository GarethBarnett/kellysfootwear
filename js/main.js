$(document).ready(function(){

	// step 0 - hide the black menu on page load (see main.css)
	// step 1 - when i click on the hamburger icon
	// step 2 - show the black menu
	// step 3 & 4 - toggle the menu on and off each time the user clicks the hamburger icon...

	// step 1
	$( ".menu" ).click(function() {

		// step 2, 3 and 4
		$( ".mobile-menu" ).toggleClass('is-visible');
		$( '.menu' ).toggleClass( 'is-active' );

	});

});