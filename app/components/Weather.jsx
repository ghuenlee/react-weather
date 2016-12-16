var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        };
    },
    handleSearch: function (location) {
        var that = this;
        debugger;
        this.setState({ isLoading: true });
        openWeatherMap.getTemp(location)
            .then(function (temp) {
                that.setState({
                    isLoading: false,
                    location: location,
                    temp: temp
                });
            }, function (err) {
                that.setState({
                    isLoading: false,
                });
                alert(err);
            });
    },
    render: function () {
        var {isLoading, temp, location} = this.state;
        function renderMessage() {
            if (isLoading) {
                return <p> is Loading ...</p>
            } else if (temp && location) {
                return <WeatherMessage location={location} temp={temp} />
            }
        };
        return (
            <div>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
            </div>
        );
    }
});