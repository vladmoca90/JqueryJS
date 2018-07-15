$(document).ready(function () {

    $("#sarusRule").click(function () {

        var a = $("#a").val();

        var b = $("#b").val();

        var c = $("#c").val();

        var d = $("#d").val();

        var e = $("#e").val();

        var f = $("#f").val();

        var g = $("#g").val();

        var h = $("#h").val();

        var i = $("#i").val();

        var y = a * e * i + b * f * g + c * d * h - c * e * g - b * d * i - a * f * h;

        $('#result').html(y);

    });

});