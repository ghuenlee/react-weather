var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            location: 'Miami',
            temp: 88
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