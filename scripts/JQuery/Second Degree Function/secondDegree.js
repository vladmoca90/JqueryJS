$(function() {

    $("#calcRoots").click(function () {

        var a = $("#a").val();

        var b = $("#b").val();

        var c = $("#c").val();

        var delta = b**2 - 4*a*c;

        if(delta < 0) {
            alert("The equation is imposible");
            return;
        }
        if(delta >= 0) {
            $('#delta').html(delta);
        }

        var x1 = (- b + Math.sqrt(delta)) / (2 * a);

        $("#rootOne").html(x1);

        var x2 = (- b - Math.sqrt(delta)) / (2 * a);

        $("#rootTwo").html(x2);

    });

});