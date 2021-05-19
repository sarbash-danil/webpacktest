// Main js file
// import{showLocalWeather,getLocation,setWeatherWeather} from './weather.js'
// import "core-js/stable";
// import "regenerator-runtime/runtime";
// import { APIservice, } from './weather.js'
import "@babel/polyfill";
// import { get } from "jquery";
import{BtnPopup,BtnDropMenu,BtnScroll} from './actions.js'
const axios = require('axios').default;

  class APIService {
    constructor() {
    }
    getPosition(){
      (this.getLocation=(position)=>{
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.getLocation);
        } else {
          showError("Your browser does not support Geolocation!");
        }
        var lat = position.coords.latitude; 
        var lng = position.coords.longitude;
        console.log(lat);
        console.log(lng);
      })()
        
    }
   getCityName(position) {
      // var lat = position.coords.latitude;  // Закоментил, что б не ругалось, вообще должно быть раскоменченное 
      // var lng = position.coords.longitude; // Закоментил, что б не ругалось, вообще должно быть раскоменченное 
        
        axios({
          method: 'post',
          url: `https://www.mapquestapi.com/geocoding/v1/reverse?key=1rgOn51ZPNAMn2lAQvX8yQkB5rib5hKV`,
          data:{
              location: {
                  latLng: {
                      // lat: `${lat}`, // Закоментил, что б не ругалось, вообще должно быть раскоменченное 
                      // lng: `${lng}`  // Закоментил, что б не ругалось, вообще должно быть раскоменченное 
                  }
              },
              options: {
                  thumbMaps: false
              }
          }
      })
      
        .then((responce) => {
            var city = responce.data.results[0].locations[0].adminArea5 //!
            var cityStr = JSON.stringify(city)
            this.userCity = cityStr.split('"').join('')
            
        })
        .catch((error) =>{
            // console.error(error);
        })
        
      }
      
   }
  
  class Application extends APIService {
    constructor() {
      super(apiService.userCity)
    }
    async showLocalWeather(){
      this.setWeather(apiService.userCity)
    }
    async showDefaultCity(){
      this.setWeather('Dubai')
    }
    async setWeather(cityName){
      let weatherResponce = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=add83517209f776fcced4e6690e72a82`)
      let data = weatherResponce.json()
      .then((data) => {
          console.log(data);
          document.querySelector('.city').innerHTML = data.name;
          document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + " ℃";
          document.querySelector('.status').innerHTML = data.weather[0].description;
          document.querySelector('.wind').innerHTML = "скорость ветра " + data.wind.speed;
          document.querySelector('.icon-weather').innerHTML = `<img src = "http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
      })
      .catch((error) =>{
        console.error(error);
    })
      return data
    }
    renderData(){
      document.querySelector('.btn__head').addEventListener('click',() => {
        this.showDefaultCity()
        
      })  
      document.querySelector(".weather__btn").addEventListener('click',() => {
        this.showLocalWeather();
      }) 
    }
  }
  const apiService = new APIService;
  const application = new Application();
  application.renderData()
  // apiService.getLocation()
  apiService.getCityName()
  apiService.getPosition()

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
