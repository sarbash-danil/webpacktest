// Main js file

// import "jquery"
// import "popper.js"
// import $ from "jquery"
// window.jQuery = $;
// window.$ = $
import{WeatherSet, WeatherSetMonday, WeatherSetTuesday, WeatherSetWensday} from './weather.js'

document.querySelector('.weather__btn').addEventListener('click', function () {
     WeatherSet();
     WeatherSetMonday();
     WeatherSetTuesday();
     WeatherSetWensday();
})
document.querySelector('.btn__head').addEventListener('click', function() {    
    document.querySelector('.popup').classList.add('popup__show');
    console.log("Open WeatherBar..."); 
})
document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.popup').classList.remove('popup__show');
    
})
