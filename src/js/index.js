// Main js file

// import "jquery"
// import "popper.js"
// import $ from "jquery"
// window.jQuery = $;
// window.$ = $

import{WeatherSet, myLocation,WeatherSetLoc} from './weather.js'
    
 document.querySelector('.card__weather').addEventListener('click', function(){
    WeatherSet();
    
    
 })  
 document.querySelector(".card__weather").addEventListener('click', function(){
    myLocation();
    WeatherSetLoc();
 }) 
   

document.querySelector('.btn__head').addEventListener('click', function() {    
    document.querySelector('.popup').classList.add('popup__show');
    console.log("Open WeatherBar..."); 
})
document.querySelector('.dropmenu-toggler').addEventListener('click', function() {    
    document.querySelector('.dropmenu').classList.add('dropmenu--show');//  не работает toggle 
})
document.querySelector('.menu__link--close').addEventListener('click', function() {  
    e.preventDefault(); 
    document.querySelector('.dropmenu').classList.remove('dropmenu--show');
})

document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.popup').classList.remove('popup__show');
})

// scroll to top
document.querySelector('#scrollToTop').addEventListener('click', function (){
    event.preventDefault();
    console.log("TestOfWorking")
	var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 600) {
		window.scrollBy(0,-2000);	
	} 
	return false;
    
});

setTimeout(function () {
    console.log("7sec")
    document.querySelector('.scrollToTop').classList.add('scrollToTop__show');
},7000)

