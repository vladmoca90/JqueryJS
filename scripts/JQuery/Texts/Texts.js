$(function () {

    $("#main, #button-box").css("margin", "20px auto");

    $("#main").width(1000);

    $("#button-box").width(150);

    $("#main").css({
        "padding": "10px",
        "border" : "1px solid #ccc"
    });

    $(".one").css({
        "font-family": "Tahoma",
        "font-size": "16px"
    });

    $(".two").css({
        "font-family": "Andalus",
        "font-size": "18px"
    });

    $(".three").css({
        "font-family": "Calibri",
        "font-size": "17px",
        "font-style": "italic"
    });

    $(".four").css({
        "font-family": "Cursive",
        "font-size": "16px",
        "color": "blue"
    });

    $("#show, #hide").addClass("pull-left");

    $("#show").addClass("btn btn-success");

    $("#hide").addClass("btn btn-danger").css("margin-left", "25px");

    $("#hide").click(function () {
        $("#main").hide(800);
    });

    $("#show").click(function () {
        $("#main").show(800);
    });

});