// here callback is a FUNCTION that will be executed on success
// it's exactly like writing your own function in the "success" property
// but instead you decided that whoever calls your function can
// decide what to do on success
function getMovies(callback) {
	var moviesUrl = "http://sampleapis20180514091454.azurewebsites.net/api/movies";

	$.ajax(moviesUrl, {
		"method": "GET",
		"success": callback
	});
}

function searchMovies(query, callback) {
	var searchUrl = "http://sampleapis20180514091454.azurewebsites.net/api/movies/search?query=" + query;

	$.ajax(searchUrl, {
		"method": "GET",
		"success": callback
	});
}

// function MoviesService() {
// 	var endpoint = "http://sampleapis20180514091454.azurewebsites.net/api/movies";

// 	// callback is a function that should have one parameter, which represents the response from the endpoint
// 	this.getMovies = function (callback) {
// 		$.get(endpoint, {
// 			"success": callback
// 		});
// 	}

// 	// search address is: 
// 	// http://sampleapis20180514091454.azurewebsites.net/api/movies/search?query=titanic (for example)

// 	this.searchMovies = function (query, callback) {
// 		var searchUrl = endpoint + "/search?query=" + query;
// 		$.get(searchUrl, {
// 			"success": callback
// 		});
// 	}

// 	/*
// 	{
// 		"movies": [ ] // array of movies
// 	}

// 	*/
// }



// var service = new MoviesService();
// service.getMovies(function (data) {

// });

// var movieWord = "Madrid";
// service.searchMovies(movieWord, function(searchResult) {
// 	console.log(searchResult.movies);
// });

// service.searchMovies("madrid", function(response) {
// 	console.log(response);
// });