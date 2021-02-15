// given a movie (JSON object), returns a jquery element
// that will contain the movie data
function createMovieElement(movie) {
	let clone = $('#movieTemplate').clone();

	clone.attr('data-movie-id', movie.id);
	clone.find('.movie-title').html(movie.title);
	clone.find('.movie-description').html(movie.description);
	clone.find('.movie-image').attr('src', movie.content_Url);
	clone.find('.movie-rating').html(parseFloat(movie.rating));

	return clone;
}


// function MoviesTools() {
// 	// given a movie (JSON object), returns a jquery element
// 	// that will contain the movie data
// 	this.createMovieElement = function(movie) {
// 		let clone = $('#movieTemplate').clone();

// 		clone.attr('data-movie-id', movie.id);
// 		clone.find('.movie-title').html(movie.title);
// 		clone.find('.movie-description').html(movie.description);
// 		clone.find('.movie-image').attr('src', movie.content_Url);
// 		clone.find('.movie-rating').html(parseFloat(movie.rating));

// 		return clone;
// 	}
// }
