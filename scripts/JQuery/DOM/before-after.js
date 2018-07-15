$(function () {

    $("#first").click(function () {
        $("#afterVlad").after("and I am 25 years old");
    });

    $("#second").click(function () {
        $("#beforeVlad").before("I would like to travel");
    });

    $("#third").click(function () {
        $("#beforeText").before("I am currently working as a Front End Developer");
        $("#afterText").after("for a company based in Reading, Berkshire");
    });

    $("#first, #second, #third, p").css("margin-top", "15px");

    $("p").addClass("text-center");

    $("button").addClass("center-block");

});