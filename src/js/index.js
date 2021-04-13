// Main js file
// import "jquery"
// import "popper.js"
// import $ from "jquery"
// window.jQuery = $;
// window.$ = $

import{ShowLocalWeather, getLocation,ShowKievWeather} from './weather.js'
    ShowKievWeather()
document.querySelector('.btn__head').addEventListener('click', function(){
    getLocation();
 })  
document.querySelector(".weather__btn").addEventListener('click', function(){
    ShowLocalWeather();
 }) 
function loadData() {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 2000);
    })
  }
  loadData()
    .then(() => {
      let preloaderEl = document.getElementById('preloader');
      preloaderEl.classList.add('hidden');
      preloaderEl.classList.remove('visible');
    });
document.querySelector('.btn__head').addEventListener('click', function() {    
    document.querySelector('.popup').classList.add('popup__show');
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
	var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 600) {
		window.scrollBy(0,-2000);	
	} 
	return false;
});
setTimeout(function () {
    document.querySelector('.scrollToTop').classList.add('scrollToTop__show');
},7000)

