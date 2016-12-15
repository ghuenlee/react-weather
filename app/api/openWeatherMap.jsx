var axios = require('axios');

const GET_WEATHER_API_URI = "http://api.openweathermap.org/data/2.5/weather?appid=0af33ac1f0c9b4eb75429059edab6aa7&units=metric";

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${GET_WEATHER_API_URI}&q=${encodedLocation}`;

        return axios.get(requestUrl)
            .then(function (res) {
                return res.data.main.temp;
            }, function (error) {
                throw new Error(error.response.data.message);
            });
    }
};