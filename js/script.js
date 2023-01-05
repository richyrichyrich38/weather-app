

// Wait for the document to be ready
$(document).ready(function() {
  // Listen for the form submission
  $('#search-form').submit(function(event) {
    // Prevent the form from actually submitting
    event.preventDefault();
    
    // Get the value of the city input field
    var city = $('#search-input').val();
    
    // Make an AJAX request to the weather API
    $.ajax({
      url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=699d121f2d0442551ebd49fa0b9d2e65',
      dataType: 'json',
      success: function(data) {
        // Extract the relevant data from the API response
        var temperature = data.main.temp;
        var humidity = data.main.humidity;
        var forecast = data.weather[0].description;
        
        // Update the weather data div with the new data
        $('#forecast').html('Temperature: ' + temperature + '<br>' +
                                'Humidity: ' + humidity + '<br>' +
                                'Forecast: ' + forecast);
      }
    });
  });
});
