$(function () {

    $("#chaining").width(400).height(400).css({
        "border": "1px solid #ccc",
        "background": "#cb2000"
    });

    $("#button").click(function () {
        $("#chaining")
        .animate({
            width: "325px",
            height: "325px"
        })
       .animate({
           borderRadius: "100%"
       })
       .animate({
           marginTop: "100px"
        });
    });

});