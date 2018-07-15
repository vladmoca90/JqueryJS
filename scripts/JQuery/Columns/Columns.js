$(function () {
    $("#text-container").width(800).height(230).css({
        "border": "1px solid #ccc",
        "margin": "20px auto",
        "padding": "15px"
    });
    $("#text").css({
        "column-count": "3",
        "column-gap": "25px",
        "column-rule": "1px dotted #444",
    });
    $("button").click(function () {
        $(".words-style").css("fontWeight", "bold");
    });
});