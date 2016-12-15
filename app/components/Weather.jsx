var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            location: 'Miami',
            temp: 88
        }
    },
    handleSearch: function (location) {
        this.setState({
            location: location,
            temp: 23
        })
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