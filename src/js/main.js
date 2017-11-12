//= _main.js
$(document).ready(function(){
    $('#product').on('click', '.head-product', function() {
		$(this).siblings('#product ul li').slideToggle(0);
	});
});

/*------SLIDER------*/
autoSlider();
var left = 0;
function autoSlider(){
    var timer = setTimeout(function(){
      var sliderWidth = document.getElementById('my-slider');
        left = left - 620;
        if (left < -1794){
            left = 0;
            clearTimeout(timer);
        }
        sliderWidth.style.left = left + 'px';
        autoSlider();  
    },3000);
}