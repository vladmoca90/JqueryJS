$(function () {
    getMovies(function (result) {
        console.log(result);

        for (var i = 0; i < result.movies.length; i++) {
            var elem = createMovieElement(result.movies[i]);

            $('#moviesList').append(elem);
        }
    });

    // the function in click() is also a callback: it says when you click the button (or whatever), please execute this function
    // callbacks are used very frequently in jQuery and in JS in general
    $('#searchBtn').on('click', function () {
        var searchQuery = $('#searchBar').val();

        console.log(searchQuery);

        searchMovies(searchQuery, function (result) {
            console.log(result);
            $('#moviesList').empty();

            for (var i = 0; i < result.movies.length; i++) {
                var searchElem = createMovieElement(result.movies[i]);

                $('#moviesList').append(searchElem);
            }
        });
    });

    /*
    this search has NOTHING TO DO WITH THE LIST OF MOVIES YOU ALREADY HAVE
    your job is to send a request to the server (using the search movies function) and it is the server's job to return a list of movies that match your search term
    1. add an input to the screen so you can write the search term
    2. add a SEARCH button
    3. when search is clicked, use searchMovies function. on success, you want to clear what is on the screen already, and show the list of movies returned by the search (you create the elements and append them to the screen like you're doing above)
    */
});