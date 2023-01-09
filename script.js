
let fetchUrl = "https://api.openweathermap.org/data/2.5/weather?q="
let cityName = '';
let apiKey = "a953ea1bb2aa05e480ed6c2a544d9ecc"

document.querySelector('.search_city').addEventListener('keyup', event =>{
    let { keyCode, target: input } = event

    if (keyCode === 13){
        cityName = input.value
        weatherInfo(cityName)

        document.querySelector('.search_city').value = ''
        
    }
    
})

function weatherInfo(cityName){

    fetch(`${fetchUrl}${cityName}&appid=${apiKey}`)
    .then(res => res.json())
    .then(cityData =>{

        console.log(cityData)

        document.querySelector('.city').innerHTML = `${cityData.name}, ${cityData.sys.country}`
        document.querySelector('.temp_now').innerHTML = `${Math.floor(cityData.main.temp - 273.15)}°c`
        document.querySelector('.sky_condition').innerHTML = `${cityData.weather[0].main}`
        document.querySelector('.min_max_temp').innerHTML = `Min ${Math.floor(cityData.main.temp_min - 273.15)}°c / Max ${Math.floor(cityData.main.temp_max - 273.15)}°c`
    })  
    .catch(err => alert('404 Error City Not Found'))      
}

weatherInfo('Rewari')


















