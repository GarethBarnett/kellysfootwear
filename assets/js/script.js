// when we click an accordion item, show it's respective accordion content inside of it
$( '.accordion-outer' ).click(function() {
  $(this).toggleClass( 'visible' );


  // at the same time hide all other accordion content
  $(this).siblings().removeClass( 'visible' );
});
