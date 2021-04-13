export {myLocation, WeatherSetLoc, WeatherSet };
let z;
let str;
var deleteSymbols;

function myLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude)
    console.log("Longitude: " + position.coords.longitude);
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;

    var url = "https://www.mapquestapi.com/geocoding/v1/reverse?key=1rgOn51ZPNAMn2lAQvX8yQkB5rib5hKV";
    const data = JSON.stringify({
        location: {
            latLng: {
                lat: `${lat}`,
                lng: `${lng}`
            }
        },
        options: {
            thumbMaps: false
        }
    });
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.responseType = 'json';

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.response);
        }
    };
    xhr.send(data);
    xhr.onload = function () {
        z = xhr.response.results[0].locations[0].adminArea5 
        str = JSON.stringify(z)
        deleteSymbols = str.split('"').join('')
        
        console.log(data);
        alert(deleteSymbols)
    }
}
function WeatherSetLoc() {

}
function WeatherSet() {
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${deleteSymbols}&appid=add83517209f776fcced4e6690e72a82`)

        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
            document.querySelector('.city').innerHTML = data.name;
            document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + " ℃";
            document.querySelector('.status').innerHTML = data.weather[0].description;
            document.querySelector('.wind').innerHTML = "скорость ветра " + data.wind.speed;
            document.querySelector('.icon-weather li').innerHTML = `<img scr = "http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
        })
        .catch(function () { })
}
