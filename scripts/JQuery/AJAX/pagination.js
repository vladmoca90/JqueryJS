$(function () {

    $('#prev').css('visibility', 'hidden');

    var pageSize = 10;

    var sizes = [10, 25, 50];

    var nextUrl = '';
    var prevUrl = '';

    function populateListWithCities(cities) {

        if (cities.length == 0) {
            throw new Error('The cities must be given');
        }

        $('#citiesList').empty();

        for (var i = 0; i < cities.length; i++) {
            var listItem = $('<li></li>');

            listItem.html(cities[i]);
            $('#citiesList').append(listItem);
        }
    }

    function populateDropWithPageSizes(pagesSizes) {

        // var blank = $('<option></option>');

        // $('#pagesDrop').append(blank);

        for (var i = 0; i < sizes.length; i++) {
            var option = $('<option></option>');

            option.attr('value', sizes[i]);
            option.html(sizes[i]);

            $('#pagesDrop').append(option);
        }
    }

    populateDropWithPageSizes(sizes);

    $('#pagesDrop').change(function() {
        var selectedOption = $(this).find(':selected').val();

        Cookies.set('pageSizeValue', selectedOption);
        window.location.reload();
    });

    if(Cookies.get('pageSizeValue')) {
        pageSize = Cookies.get('pageSizeValue');
    }

    var pagesUrl = 'http://sampleapis20180514091454.azurewebsites.net/api/Pagination?pageNumber=0&pageSize='+ pageSize;

    $.ajax(pagesUrl, {
        method: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);

            if (response.hasNext) {
                nextUrl = response.next;
                $('#prev').css('visibility', 'visible');
            } else {
                $('#next').css('visibility', 'hidden');
            }

            if (response.hasPrevious) {
                prevUrl = response.previous;
                $('#prev').css('visibility', 'visible');
            } else {
                $('#prev').css('visibility', 'hidden');
            }

            populateListWithCities(response.cities);
        },
        error: function (err) {
            console.error(err);
        }
    });

    $('#next').click(function () {

        $.ajax(nextUrl, {
            method: 'GET',
            dataType: 'json',
            contentType: 'application/json',
            success: function (response) {
                console.log(response);

                if (response.hasNext) {
                    nextUrl = response.next;
                    $('#prev').css('visibility', 'visible');
                } else {
                    $('#next').css('visibility', 'hidden');
                }

                if (response.hasPrevious) {
                    prevUrl = response.previous;
                    $('#prev').css('visibility', 'visible');
                } else {
                    $('#prev').css('visibility', 'hidden');
                }

                populateListWithCities(response.cities);
            },
            error: function (err) {
                console.error(err);
            }
        });
    });

    $('#prev').click(function () {

        $.ajax(prevUrl, {
            method: 'GET',
            dataType: 'json',
            contentType: 'application/json',
            success: function (response) {
                console.log(response);

                if (response.hasNext) {
                    nextUrl = response.next;
                    $('#prev').css('visibility', 'visible');
                } else {
                    $('#next').css('visibility', 'hidden');
                }

                if (response.hasPrevious) {
                    prevUrl = response.previous;
                    $('#prev').css('visibility', 'visible');
                } else {
                    $('#prev').css('visibility', 'hidden');
                }

                populateListWithCities(response.cities);
            },
            error: function (err) {
                console.error(err);
            }
        });
    });
});