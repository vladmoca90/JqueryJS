$(document).ready(function() {

    $("#calcTriangl").click(function () {

        var a = $("#a").val();

        var b = $("#b").val();

        var c = $("#c").val();

        var d = $("#d").val();

        var e = $("#e").val();

        var f = $("#f").val();

        var g = $("#g").val();

        var h = $("#h").val();

        var i = $("#i").val();

        var x = a*e*i + d*h*c + g*b*f - c*e*g - a*f*h - d*b*i;

        $('#result').html(x);

    });

});