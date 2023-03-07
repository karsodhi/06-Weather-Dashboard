// step1:
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and 
var searchCity = document.querySelector(".search-city");
var getWeather = document.querySelector(".get-weather");
var searchHistoryList = document.querySelector(".search-history-list");
getWeather.addEventListener("click", function(){
var city = searchCity.value
var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=a045d9b60c07d6a016c32000751b97de"

fetch(requestUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(weather) {
    console.log('Here is the weather data:', weather);
    // Display the weather information on the page
  })
  .catch(function(error) {
    console.log('Error fetching weather data:', error);
  });
});
    
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city




// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=a045d9b60c07d6a016c32000751b97de

// api key = a045d9b60c07d6a016c32000751b97de