
$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop()){
            $('header').addClass('header--change');
        }
        else{
            $('header').removeClass('header--change');
        }
    })
});

{
    var anhyeuem = "anhyeuem";
}