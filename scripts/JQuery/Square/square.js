$(function() {

    $(".square").addClass("center-block").css({
        "margin-top": "30px",
        "background": "gold"
    });

    $(".square__list").addClass("list-unstyled").css({
        "font-size": "16px",
        "font-family": "Verdana",
        "padding-top": "25px"
    });

    $(".square__list").children("li.second").css({
        "font-style": "italic",
        "color": "#f00"
    });

    $(".square__list").children("li").not("li.second").click(function() {
        $(this).css("color", "#0000ff");
    });

    $(".square__list>li").addClass("text-center").css({
        "padding-top": "10px"
    });

});