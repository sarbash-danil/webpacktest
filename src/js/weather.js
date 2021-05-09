    // const axios = require('axios').default;
    // let city;
    // let cityStr;
    // var deleteSymbols;
    
//    export class APIservice{
//     constructor() {

//       }
//       showPosition(position) {
//         const lat = 49.2305236; //position.coords.latitude;
//         const lng = 28.4388634; //position.coords.longitude
//         return new Promise((resolve, reject) => {
//         axios({
//             method: 'post',
//             url: 'https://www.mapquestapi.com/geocoding/v1/reverse?key=1rgOn51ZPNAMn2lAQvX8yQkB5rib5hKV',
//             data:{
//                 location: {
//                     latLng: {
//                         lat: `${lat}`,
//                         lng: `${lng}`
//                     }
//                 },
//                 options: {
//                     thumbMaps: false
//                 }
//             }
//         })
//         .then((resolve) => {
//             city = resolve.data.results[0].locations[0].adminArea5
//             cityStr = JSON.stringify(city)
//             deleteSymbols = cityStr.split('"').join('')
//         })
//         .catch((error) =>{
//             console.error(error);
//         })
//         })
       
//         }
//        getLocation(resolve){
        
//           if (navigator.geolocation) {
//               navigator.geolocation.getCurrentPosition(this.showPosition);
//           } else {
//               x.innerHTML = "Geolocation is not supported by this browser.";
//           }
//       }
//       showLocalWeather(){
//         this.showKiev(deleteSymbols)
//       }
//       showKievWeather(){
//         this.showKiev('Kiev')
//       }
//       showKiev(cityName){
          
//           fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=add83517209f776fcced4e6690e72a82`)
//           .then((resp) => { return resp.json() })
//           .then((data) => {
//               console.log(data);
//               document.querySelector('.city').innerHTML = data.name;
//               document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + " ℃";
//               document.querySelector('.status').innerHTML = data.weather[0].description;
//               document.querySelector('.wind').innerHTML = "скорость ветра " + data.wind.speed;
//               document.querySelector('.icon-weather').innerHTML = `<img src = "http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
//           })
//           .catch(()=> {alert("check your location`s permitions") })
//       }

//     }



    
    
