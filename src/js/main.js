//= _main.js
$(document).ready(function(){
    $('#product').on('click', '.head-product', function() {
		$(this).siblings('#product ul li').slideToggle(0);
	});
});