var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

module.exports = React.createClass({

    getInitialState: function () {
        return {
            isLoading: false
        };
    },

    handleSearch: function (location) {
        var that = this;
        this.setState({
            isLoading: true,
            errorMessage: undefined
        });
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
                    errorMessage: err.message
                });
            });
    },

    render: function () {

        var {isLoading, errorMessage, temp, location} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <p className="text-center"> is Loading ...</p>;
            } else if (temp && location) {
                return <WeatherMessage location={location} temp={temp} />;
            }
        }

        function renderError() {
            if (typeof errorMessage === 'string') {
                return <ErrorModal errMsg={errorMessage} />;
            }
        }

        return (
            <div>
                <h2 className="text-center page-title">Get Weather</h2>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});