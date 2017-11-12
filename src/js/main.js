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

/*-----ADD TO BASKET FOR CLICK*/
var count = 0;
$(document).ready(function(){
   $('.to-basket').on('click',function(){
       count = count+1;
    $('.head-basket').text('There are currently ' +count+ ' items in your basket!');  
    });
});