const axios = require('axios').default;

    export class APIService {
        constructor() {
        }
        getPosition() {
          return new Promise(function(resolve, reject){
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });
        }
          async getCoordinates() {
            const position = await this.getPosition();
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
    
            return { lat, lng };
          }
       getCityName(lat, lng) {
            axios({
              method: 'post',
              url: `https://www.mapquestapi.com/geocoding/v1/reverse?key=1rgOn51ZPNAMn2lAQvX8yQkB5rib5hKV`,
              data:{
                  location: {
                      latLng: {
                          lat: lat, 
                          lng: lng 
                      }
                  },
                  options: {
                      thumbMaps: false
                  }
              }
          })
            .then((response) => {
              console.log(response.data);
                var city = response.data.results[0].locations[0].adminArea5 //!
                var cityStr = JSON.stringify(city)
                this.userCity = cityStr.split('"').join('')
                
            })
            .catch((error) =>{
                console.error(error);
            })
          }
       }
      
       export class Application extends APIService {
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
            apiService.getCoordinates().then(({ lat, lng })=>{
              apiService.getCityName(lat, lng)
            });
            apiService.getPosition()
          }) 
        }
      }

      const apiService = new APIService();
     
