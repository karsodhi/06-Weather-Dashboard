// step1:
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and 
var searchCity = document.querySelector("#search-city");
var getWeather = document.querySelector("#get-weather");
var searchHistoryList = document.querySelector(".search-history-list");
var container = document.querySelector("#container")
getWeather.addEventListener("click", getCityOne)

function getCityOne(e){
  e.preventDefault()
  var cityName= searchCity.value
  console.log('city value', cityName)
  getCityWeather(cityName)
}

function getCityWeather(city){
// var city = searchCity.value
var apiKey ="f30dc0b71f772a037a522282770190be" 
var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey
// https://api.openweathermap.org/data/2.5/weather?q=f30dc0b71f772a037a522282770190be

fetch(requestUrl)
.then(function(response) {
    return response.json();
  })
  .then(function(weather) {
    console.log('Here is the weather data:', weather);
    var nameOfCity=document.createElement("h1")
    var tempOfCity=document.createElement("h2")
    var windOfCity=document.createElement("h2")
    var humidityOfCity=document.createElement("h2")
    var iconValue = weather.weather[0].icon
    var icon="http://openweathermap.org/img/wn/" + iconValue + ".png"
    var latitudeOfCity=weather.coord.lat
    var longitudeOfCity=weather.coord.lon
 // Display the weather information on the page
    nameOfCity.textContent=weather.name
container.append(nameOfCity)
tempOfCity.textContent="Temp: " + Math.round((weather.main.temp -273.15)* 9/5+32)
container.append(tempOfCity)
windOfCity.textContent="Wind: " + weather.wind.speed + " MPH"
container.append(windOfCity)
humidityOfCity.textContent="Humidity: " + weather.main.humidity + "%"
container.append(humidityOfCity)
var icon = document.createElement('img')
icon.setAttribute('src', weather.main)
container.append(icon)

    var requestUv = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitudeOfCity + "&lon=" + longitudeOfCity + "&exclude={part}&appid=f30dc0b71f772a037a522282770190be";
fetch(requestUv)
.then(function(response){
  return response.json();
})
.then(function(cityData) {
  console.log("hello", cityData)
  var uvRays=document.createElement("h2")
  uvRays.textContent="UV: " + cityData.current.uvi
  container.append(uvRays)
})
  })
  // .catch(function(error) {
  //   console.log('Error fetching weather data:', error);
  // });
};
    
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city




// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=a045d9b60c07d6a016c32000751b97de
