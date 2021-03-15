// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files
import "jquery"
import "popper.js"
import $ from "jquery"
window.jQuery = $;
window.$ = $;
  

$(function () {
    console.log("ghbdtn")
	//слайдер
	$('.owl-carousel').owlCarousel({
    loop:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
	//gamburger
	$('.gamburger').click(function(e){
		e.preventDefault();
		$('.menu').toggleClass('show')
	})
	$("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 100);
    return false;
  });
	//scroll
	var btn = $('.scroll-to-top');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 600) {
       btn.addClass('show');
     } else {
       btn.removeClass('show');
     }
   });
   btn.on('click', function(e) {
     e.preventDefault();
     $('html, body').animate({scrollTop:0}, '300');
   });
   //popup
   $('.login').click(function(e){
		e.preventDefault();
		$('.popup').addClass('show')
	})
    $('.close').click(function(e){
		e.preventDefault();
		$('.popup').removeClass('show')
	})
	//ссылка на магазин
	  $('.cardbar__card').click(function(e){
		return location.href = 'productpage.html'
});
//каунтер стоимости на стр товара
let calculate = document.getElementById("calculation");
let count = document.getElementById("buttonCountNumber");
calculation = document.getElementById("calculation").innerHTML;

document.getElementById("buttonCountPlus").onclick = function() {
  let countPlus = count.innerHTML;
  if(+countPlus <= 3){
    count.innerHTML++;
    let countPlus = count.innerHTML;
    calculate.innerHTML = calculations(countPlus) ;
  }
}

document.getElementById("buttonCountMinus").onclick = function() {
  let countMinus = count.innerHTML;
  if(+countMinus >= 2){
    count.innerHTML--;
    let countMinus = count.innerHTML;
    calculate.innerHTML = calculations(countMinus) ;
  }
}

document.getElementById("xl").onclick = function() {
	let result = document.getElementById("calculation").innerHTML;
	calculate.innerHTML = zzz(result);
    }
    zzz = (result) =>{
    	return (+calculation)*2;
    }
    calculations = (count) => {
  return (+count)*(+calculation);
}
//link home
document.getElementById("home").onclick = function() {
	return location.href = 'index.html'
}

document.getElementsByClassName("gamburger").onclick = function() {
  console.log("hi")
}
    });

    // $('.gamburger').click(function(e){
    //   e.preventDefault();
    //   $('.menu').toggleClass('show')
    // })
    // $("a.scrollto").click(function() {
    //   var elementClick = $(this).attr("href")
    //   var destination = $(elementClick).offset().top;
    //   jQuery("html:not(:animated),body:not(:animated)").animate({
    //     scrollTop: destination
    //   }, 100);
    //   return false;
    // });