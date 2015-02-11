// Change Day and Night reading modes


// Upon Clicking "Nightime"
// REF: http://api.jquery.com/click/
$( ".Nightime" ).click(function() {
  alert( "Handler for .click() called." );
});

// remove `day` class
// REF: http://api.jquery.com/removeclass/
$( ".day" ).removeClass( "myClass yourClass" );

// Add `night` class
// REF: http://api.jquery.com/addclass/
$( ".night" ).addClass( "myClass yourClass" );


// Upon Clicking "Daytime"
// REF: http://api.jquery.com/click/
$( ".sun.icon" ).click(function() {
  alert( "Handler for .click() called." );
});

// remove `night` class
// REF: http://api.jquery.com/removeclass/
$( ".night" ).removeClass( "myClass yourClass" );

// Add `day` class
// REF: http://api.jquery.com/addclass/
$( ".day" ).addClass( "myClass yourClass" );