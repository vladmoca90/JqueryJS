$(function() {
    $('#prev').css('visibility', 'hidden');

    let pageSize = 10;
    let sizes = [10, 25, 50];

    let nextUrl = '';
    let prevUrl = '';

    const populateListWithCities = cities => {
        if(cities.length == 0) {
            throw new Error('The cities must be given');
        }

        $('#citiesList').empty();

        for(let i = 0; i < cities.length; i++) {
            let listItem = $('<li></li>');

            listItem.html(cities[i]);
            $('#citiesList').append(listItem);
        }
    }

    const populateDropWithPageSizes = pagesSizes => {
        for(let i = 0; i < sizes.length; i++) {
            let option = $('<option></option>');

            option.attr('value', sizes[i]);
            option.html(sizes[i]);

            $('#pagesDrop').append(option);
        }
    }

    populateDropWithPageSizes(sizes);

    $('#pagesDrop').change(function() {
        let selectedOption = $(this).find(':selected').val();

        Cookies.set('pageSizeValue', selectedOption);
        window.location.reload();
    });

    if(Cookies.get('pageSizeValue')) {
        pageSize = Cookies.get('pageSizeValue');
    }

    let pagesUrl = 'http://sampleapis20180514091454.azurewebsites.net/api/Pagination?pageNumber=0&pageSize='+ pageSize;

    $.ajax(pagesUrl, {
        method: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);

            if(response.hasNext) {
                nextUrl = response.next;
                $('#prev').css('visibility', 'visible');
            } else {
                $('#next').css('visibility', 'hidden');
            }

            if(response.hasPrevious) {
                prevUrl = response.previous;
                $('#prev').css('visibility', 'visible');
            } else {
                $('#prev').css('visibility', 'hidden');
            }

            populateListWithCities(response.cities);
        },
        error: function(err) {
            console.error(err);
        }
    });

    $('#next').on('click', function() {
        $.ajax(nextUrl, {
            method: 'GET',
            dataType: 'json',
            contentType: 'application/json',
            success: function(response) {
                console.log(response);

                if(response.hasNext) {
                    nextUrl = response.next;
                    $('#prev').css('visibility', 'visible');
                } else {
                    $('#next').css('visibility', 'hidden');
                }

                if(response.hasPrevious) {
                    prevUrl = response.previous;
                    $('#prev').css('visibility', 'visible');
                } else {
                    $('#prev').css('visibility', 'hidden');
                }

                populateListWithCities(response.cities);
            },
            error: function(err) {
                console.error(err);
            }
        });
    });

    $('#prev').on('click', function() {
        $.ajax(prevUrl, {
            method: 'GET',
            dataType: 'json',
            contentType: 'application/json',
            success: function(response) {
                console.log(response);

                if(response.hasNext) {
                    nextUrl = response.next;
                    $('#prev').css('visibility', 'visible');
                } else {
                    $('#next').css('visibility', 'hidden');
                }

                if(response.hasPrevious) {
                    prevUrl = response.previous;
                    $('#prev').css('visibility', 'visible');
                } else {
                    $('#prev').css('visibility', 'hidden');
                }

                populateListWithCities(response.cities);
            },
            error: function(err) {
                console.error(err);
            }
        });
    });
});