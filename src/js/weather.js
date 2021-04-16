export {getLocation, ShowLocalWeather,ShowKievWeather};
const axios = require('axios').default;

let city;
let cityStr;
var deleteSymbols;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
        
    }
}
async function showPosition(position) {
    const lat = 49.2305236;
    const lng = 28.4388634;
    const res = await axios({
        method: 'post',
        url: 'https://www.mapquestapi.com/geocoding/v1/reverse?key=1rgOn51ZPNAMn2lAQvX8yQkB5rib5hKV',
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
      
    .then(function (response) {
        city = response.data.results[0].locations[0].adminArea5
        cityStr = JSON.stringify(city)
        deleteSymbols = cityStr.split('"').join('')
        
        
    })
    .catch((error) =>{
        console.error(error);
        
    })
    
}
function ShowLocalWeather() {
    showKiev(deleteSymbols)
}
function ShowKievWeather() {
    showKiev('Kiev')
}
export function showKiev(urlparamter) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${urlparamter}&appid=add83517209f776fcced4e6690e72a82`)
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + " ℃";
        document.querySelector('.status').innerHTML = data.weather[0].description;
        document.querySelector('.wind').innerHTML = "скорость ветра " + data.wind.speed;
        document.querySelector('.icon-weather').innerHTML = `<img src = "http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
    })
    .catch(function () {alert("check your location`s permitions") })
    
}
