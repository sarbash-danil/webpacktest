// Main js file
// import{showLocalWeather,getLocation,setWeatherWeather} from './weather.js'
// import "core-js/stable";
// import "regenerator-runtime/runtime";
import "@babel/polyfill";
import{BtnPopup,BtnDropMenu,BtnScroll} from './actions.js'
// import { APIservice, } from './weather.js'
  const axios = require('axios').default;
  var userCity;
  class APIService {
    constructor() {
     
    }
    getLocation(resolve){
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.getCityName);
      } else {
          x.innerHTML = "Geolocation is not supported by this browser.";
      }
    }
    async getCityName(position) {
      const lat = 49.2305236; //position.coords.latitude;
      const lng = 28.4388634; //position.coords.longitude
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url: `https://www.mapquestapi.com/geocoding/v1/reverse?key=1rgOn51ZPNAMn2lAQvX8yQkB5rib5hKV`,
          data:{
              location: {
                  latLng: {
                      lat: `${lat}`,
                      lng: `${lng}`
                  }
              },
              options: {
                  thumbMaps: false
              }
          }
      })
        .then((resolve) => {
            var city = resolve.data.results[0].locations[0].adminArea5
            var cityStr = JSON.stringify(city)
            var userCity =  cityStr.split('"').join('')
          console.log(userCity)
            
        })
        .catch((error) =>{
            console.error(error);
        })
      })
    }
  }
  class Application{
    constructor() {
    }
    async showLocalWeather(){
      this.setWeather(userCity) //ne vidit 
    }
    async showDefaultCity(){
      this.setWeather('Kiev')
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
        
        apiService.getLocation();
        apiService.getCityName()
        
      })  
      document.querySelector(".weather__btn").addEventListener('click',() => {
        this.showLocalWeather();
      }) 
    }
  }

  const apiService = new APIService('http://api.openweathermap.org/data/2.5/weather');
  const application = new Application(apiService);
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
