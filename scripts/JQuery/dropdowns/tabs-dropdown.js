$(function () {

    $('#carMakesSelector').change(function() {
		var value = $(this).find(':checked').attr('value');
		$('.search-by-model option').hide();
		$('#carModelsSelector option[data-parent=' + value +']' ).show();
   });
});