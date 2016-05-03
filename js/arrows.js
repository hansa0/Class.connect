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

    // display day
    displayDay();

    $('body').on('click', '.leftarrow', function(e) {
        var date = new Date(localStorage.getItem("selectedDay"));
        var new_date = date.addDays(-1);
        localStorage.setItem("selectedDay", new_date);
        displayDay();
        window.location.reload();
    });

    $('body').on('click', '.rightarrow', function(e) {
        var date = new Date(localStorage.getItem("selectedDay"));
        var new_date = date.addDays(1);
        localStorage.setItem("selectedDay", new_date);
        displayDay();
        window.location.reload();

    });

});

var displayDay = function() {
    var date = new Date(localStorage.getItem("selectedDay"));
    var date_to_display = date.toISOString().substring(0, 10);
    
    $("#selected-day").html(date_to_display);
}

Date.prototype.addDays = function(days)
{
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
};
