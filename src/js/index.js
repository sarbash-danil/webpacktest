// Main js file
// import{showLocalWeather,getLocation,setWeatherWeather} from './weather.js'
// import "core-js/stable";
// import "regenerator-runtime/runtime";
import "@babel/polyfill";
import{BtnPopup,BtnDropMenu,BtnScroll} from './actions.js'
// import { APIservice, } from './weather.js'
  const axios = require('axios').default;
  let city;
  let cityStr;
  var userCity;
class APIService {

  constructor(endpoint) {
    this._endpoint = null;

    this._apiKey = '1rgOn51ZPNAMn2lAQvX8yQkB5rib5hKV';
    this._apiKey2 = 'add83517209f776fcced4e6690e72a82';
    this.endpoint = endpoint;
  }
  getLocation(resolve){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.getCityName);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  getCityName(position) {
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
        console.log(userCity)
          city = resolve.data.results[0].locations[0].adminArea5
          cityStr = JSON.stringify(city)
          userCity = cityStr.split('"').join('')
      })
      .catch((error) =>{
          console.error(error);
      })
    })
  }
  showLocalWeather(){
    this.setWeather(userCity)
  }
  showDefaultCity(){
    this.setWeather('Kiev')
  }
  setWeather(cityName){
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=add83517209f776fcced4e6690e72a82`)
      .then((resp) => { return resp.json() })
      .then((data) => {
          console.log(data);
          document.querySelector('.city').innerHTML = data.name;
          document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + " ℃";
          document.querySelector('.status').innerHTML = data.weather[0].description;
          document.querySelector('.wind').innerHTML = "скорость ветра " + data.wind.speed;
          document.querySelector('.icon-weather').innerHTML = `<img src = "http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
      })
      .catch(()=> {})
  }
  


  // getWeatherByCityName(name) {
  //   return fetch(`${this._endpoint}?q=${name}&appid=${_apiKey}`)
  //     .then((response)  => response.json());
  // }

  /* add other methods here */

}

class Application {

  constructor(api) {
    this.api = null;
  }
  init() {
    const cityName = this.getCityName();   //2 .присваевается переменной

    if (!cityName) {
      // this.setWeather('Kiev');          //3. если не вернулась локация то покажет киев
    }

    // this.setWeather(cityName);        //4. если вернулас ьто покажет лок погоду
  }

  getCityName() {
    return true;              //1. запрос локации
  }

  _loadWeather(cityName) {
    if (typeof cityName === 'string') {
      // use default location
      this.setWeather('Kiev')
      this
        .api
        .setWeather(cityName)
        .then(this._renderData)
        .catch(this._renderError);
    }

    // use location parameter
    // ...
  }

  // _renderData(response) {
  //   document.querySelector('.city').innerHTML = response.name;
  //   // ...
  // }

  // _renderError(error) {
  //   // ...
  // }
}
const show = new APIService
const apiService = new APIService('http://api.openweathermap.org/data/2.5/weather');
const application = new Application(apiService);


application.init();

  BtnPopup()
  BtnDropMenu()
  BtnScroll()
  
  document.querySelector('.btn__head').addEventListener('click',() => {
    show.showDefaultCity()
    show.getLocation();
  })  
  document.querySelector(".weather__btn").addEventListener('click',() => {
    show.showLocalWeather();
  }) 
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


    class RequestUser{
      constructor(url){
          url = 'https://jsonplaceholder.typicode.com'
      }
      async UserInformation(){
          
          let responce = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
          let data = responce.json();
          console.log(data);
          return data
          // .catch((error) => {
          //     console.error(error);
          // })
      }
  
  }
  (async () =>{
      let requestUser = new RequestUser;
      let user = await requestUser.UserInformation()
      
  
      // .catch((error) => {
      //     console.error(error);
      // })
      
  });
 
  const requestUser = new RequestUser;
  requestUser.UserInformation()
