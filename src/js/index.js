// Main js file
// import{showLocalWeather,getLocation,setWeatherWeather} from './weather.js'
// import "core-js/stable";
// import "regenerator-runtime/runtime";
// import { APIservice, } from './weather.js'
import "@babel/polyfill";
// import { get } from "jquery";
import{BtnPopup,BtnDropMenu,BtnScroll} from './actions.js'
import{APIService, Application} from './weather.js'


const application = new Application();
  application.renderData()
  
  BtnPopup()
  BtnDropMenu()
  BtnScroll()
  
  let loadData = () =>{
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
