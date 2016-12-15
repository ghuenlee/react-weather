var axios = require('axios');

const GET_WEATHER_API_URI = "http://api.openweathermap.org/data/2.5/weather?appid=0af33ac1f0c9b4eb75429059edab6aa7&units=metric";

// module.exports = {
var getTemp = function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${GET_WEATHER_API_URI}&q=${encodedLocation}`;

        axios.get(requestUrl)
            .then(function (response) {
                console.log(response.data.main.temp);
            })
            .catch(function (error) {
                console.log(error.response.data.message);
            });
    }
    // };
getTemp('Cuanagaltoazeza');
// axios.get(GET_WEATHER_API_URI)
//     .then(function (response) {
//         console.log('It is', response.data.main.temp, 'degrees in', response.data.name);
//         console.log(response.data.weather[0].main + ',', response.data.weather[0].description + '.');
//     })
//     .catch(function (error) {
//         console.log(error);
//     });