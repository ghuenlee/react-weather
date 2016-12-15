var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

module.exports = React.createClass({
    handleSearch: function (location) {
        alert(location);
    },
    render: function () {
        return (
            <div>
                <WeatherForm onSearch={this.handleSearch} />
                <WeatherMessage />
            </div>
        );
    }
});