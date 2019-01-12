$(function () {


    $("#button").on('click', function() {

         $(".square, .square__child").animate({
            borderRadius: "100%",
        });

        $(".square").animate({
            height: "500px",
            width: "500px"
        });

        $(".square__child").animate({
            height: "150px",
            width: "150px"
        });

    });

});