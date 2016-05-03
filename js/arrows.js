$(function() {
    $( ".left-arrow").button({
        icons: {
            primary: "ui-icon-carat-1-w"
        },
        text: false
    });
    $( ".right-arrow" ).button({
        icons: {
            primary: "ui-icon-carat-1-e"
        },
        text: false
    });
});

$(document).ready(function() {

    $('body').on('click', '.leftarrow', function(e) {
        console.log(e.target);

        var date = new Date(localStorage.getItem("selectedDay"));
        console.log(date);

    });

    $('body').on('click', '.rightarrow', function(e) {
        console.log(e.target);


        var date = new Date(localStorage.getItem("selectedDay"));
        console.log(date);
        
    });

});