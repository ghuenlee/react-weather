var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
<<<<<<< HEAD
var openWeatherMap = require('openWeatherMap');
=======
>>>>>>> b2da5667e30e783c76d031ba130eada1cee38967

module.exports = React.createClass({
    getInitialState: function () {
        return {
            location: 'Miami',
            temp: 88
<<<<<<< HEAD
        };
    },
    handleSearch: function (location) {
        var that = this;
        openWeatherMap.getTemp(location)
            .then(function (temp) {
                that.setState({
                    location: location,
                    temp: temp
                });
            }, function (err) {
                alert(err);
            });
=======
        }
    },
    handleSearch: function (location) {
        this.setState({
            location: location,
            temp: 23
        })
>>>>>>> b2da5667e30e783c76d031ba130eada1cee38967
    },
    render: function () {
        var {temp, location} = this.state;
        return (
            <div>
                <WeatherForm onSearch={this.handleSearch} />
                <WeatherMessage location={location} temp={temp} />
            </div>
        );
    }
});