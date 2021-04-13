// Main js file
// import "jquery"
// import "popper.js"
// import $ from "jquery"
// window.jQuery = $;
// window.$ = $

import{ShowLocalWeather, getLocation,ShowKievWeather} from './weather.js'
import{actions} from './btnActions.js'

    actions();
    ShowKievWeather();
    
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


