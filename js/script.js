// city data
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

//5 day / 3 hour forecast data
//https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

//api key
//699d121f2d0442551ebd49fa0b9d2e65

var apiKey = '699d121f2d0442551ebd49fa0b9d2e65';
var city = 'London';
var baseURL = 'https://api.openweathermap.org/data/2.5/'
var currentURL = baseURL + `weather?appid=${apiKey}&units=metric&`;
var forecastURL = baseURL + `weather?appid=${apiKey}&units=metric&`;


function inputSubmitted(cityName) {
  $.get(currentURL + `q=${cityName}`)
    .then(function(currentData) {
      console.log(currentData);

      console.log(`
      Temp: ${Math.round(currentData.main.temp)}
      Humidity: ${currentData.main.humidity}%
      Wind Speed: ${currentData.wind.speed}
      `);

      $.get(forecastURL + `lat=${currentData.coord.lat}&lon=${currentData.coord.lon}`)
        .then(function(forecastData) {
          console.log(forecastData);

        })

    })
}

inputSubmitted(city)


// var searchInput = document.querySelector('#search-input');



// function getWeatherData(event) {
//   var searchText = searchInput.value.trim()
//   event.preventDefault;

//   if (submit && searchText) {
//     fetch()
//   }
// }


// function init() {
//   searchInput.addEventListener('submit', getWeatherData);
// }

// init()



/* 
<div class="col-lg-9 pb-3">
  <section id="today" class="mt-3" role="region" aria-live="polite"></section>
  <section id="forecast" class="row mt-3" role="region" aria-live="polite"></section>
</div> 
*/


