export {WeatherSet, WeatherSetMonday,WeatherSetTuesday,WeatherSetWensday};
    
    function WeatherSet() {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&cnt=7&appid=1f07130489a588d4855ae4699353cb66')
        .then (function (resp) { return resp.json() })
        .then (function (data){
            console.log(data);
            document.querySelector('.city').innerHTML = data.name;
            document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + " ℃";
            document.querySelector('.status').innerHTML = data.weather[0].description;
            document.querySelector('.wind').innerHTML = "скорость ветра " + data.wind.speed;
        }) 
        .catch(function () { })
    }
    function WeatherSetMonday() {
        document.querySelector('.card__weather--wen').addEventListener('click', function () {
            fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&cnt=3&appid=1f07130489a588d4855ae4699353cb66')
            .then (function (resp) { return resp.json() })
            .then (function (data){
            console.log(data);
            document.querySelector('.city').innerHTML = data.name;
            document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273 )  + " ℃";
            document.querySelector('.status').innerHTML = data.weather[0].description;
            document.querySelector('.wind').innerHTML = "скорость ветра " + data.wind.speed;
            document.querySelector('.temp__wen').innerHTML = Math.round(data.main.temp - 273)  + " ℃";
    
        }) 
        })
      }
      function WeatherSetTuesday(){
        document.querySelector('.card__weather--tue').addEventListener('click', function () {
            fetch('http://api.openweathermap.org/data/2.5/weather?q=Kiev&cnt=2&appid=1f07130489a588d4855ae4699353cb66')
            .then (function (resp) { return resp.json() })
            .then (function (data){
            console.log(data);
            document.querySelector('.city').innerHTML = data.name;
            document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273)  + " ℃";
            document.querySelector('.status').innerHTML = data.weather[0].description;
            document.querySelector('.wind').innerHTML = "скорость ветра " + data.wind.speed;
            document.querySelector('.temp__tue').innerHTML = Math.round(data.main.temp - 273)  + " ℃";
        }) 
        })
      }
      function WeatherSetWensday() {
        document.querySelector('.card__weather--mon').addEventListener('click', function () {
            fetch('http://api.openweathermap.org/data/2.5/weather?q=Moscow&cnt=1&appid=1f07130489a588d4855ae4699353cb66')
            .then (function (resp) { return resp.json() })
            .then (function (data){
            console.log(data);
            document.querySelector('.city').innerHTML = data.name;
            document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273)  + " ℃";
            document.querySelector('.status').innerHTML = data.weather[0].description;
            document.querySelector('.wind').innerHTML = "скорость ветра " + data.wind.speed;
            document.querySelector('.temp__mon').innerHTML = Math.round(data.main.temp - 273) + " ℃";
        }) 
        })
      }



