var cityInput = document.querySelector('#city');
var cityBtn = document.querySelector('#search-btn');

var formHandler = function(event) {
    event.preventDefault();
    var cityName = cityInput.value.trim();

    if (cityName) {
        getCityWeather(cityName);
        cityInput.value = '';
    } else {
        alert('Please enter a city!');
    }
}

var getCityWeather = function(city) {
    var currentWeatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3655ed2750f651629b08c7f61f4fd95c`;
    var fiveDayApi = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=0231b088137927c3d579de4869b3ea5f`;

    fetch(currentWeatherApi).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data)
                // displayCity(data, city);
            });
        } else {
            alert(`Error: ${response.statusText}`)
        }
    })
    .catch(function(error) {
        alert('Unable to load weather.');
    })

    fetch(fiveDayApi).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data)
                // display fiveDay(data, city)
            });
        }
    })
    .catch(function(error) {
        alert('Unable to load weather.');
    })
}


cityBtn.addEventListener("click", formHandler)