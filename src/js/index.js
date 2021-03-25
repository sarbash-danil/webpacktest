// Main js file
import "jquery"
import "popper.js"
import $ from "jquery"
window.jQuery = $;
window.$ = $
document.querySelector('.weather__btn').addEventListener('click', function () {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&cnt=7&appid=1f07130489a588d4855ae4699353cb66')
        .then (function (resp) { return resp.json() })
        .then (function (data){
            console.log(data);
            document.querySelector('.city').innerHTML = data.name;
            document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + " ℃";
            document.querySelector('.status').innerHTML = data.weather[0].description;
            document.querySelector('.wind').innerHTML = "скорость ветра " + data.wind.speed;
 
        }) 
        .catch(function () {
            
        });
    });
    
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

    document.querySelector('.btn__head').addEventListener('click', function () {
        document.querySelector('.popup').classList.add('popup__show');
        
    })
    document.querySelector('.close').addEventListener('click', function () {
        document.querySelector('.popup').classList.remove('popup__show');
        
    })
    

// function ready() {
    
//   }

//   document.addEventListener("DOMContentLoaded", ready);

document.querySelector('.btn__head').addEventListener('click', function() {    
    // e.preventDefault();
    document.querySelector('.popup').classList.toggle('show');
    // let drop = document.getElementByClassName("dropmenu");
    console.log("hi");
    
    
});

$(".btn__head").onclick(function() {
    e.preventDefault();
    $('.popup').addClass('show')
})






