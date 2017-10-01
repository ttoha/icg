/**
 * Created by Ivashkevych on 13.02.2015.
 */
( function( $ ) {
    $( document ).ready(function() {
        var activeElement = $('#cssmenu>ul>li:first');

        $('#cssmenu>ul>li').each(function() {
            if ($(this).hasClass('active')) {
                activeElement = $(this);
            }
        });


        var posLeft = activeElement.position().left;
        var elementWidth = activeElement.width();
        posLeft = posLeft + elementWidth/2 -6;
        if (activeElement.hasClass('has-sub')) {
            posLeft -= 6;
        }

        $('#cssmenu>ul').prepend('<li id="menu-button"><a>Menu</a></li>');
        $( "#menu-button" ).click(function(){
            if ($(this).parent().hasClass('open')) {
                $(this).parent().removeClass('open');
            }
            else {
                $(this).parent().addClass('open');
            }
        });
    });
} )( jQuery );
