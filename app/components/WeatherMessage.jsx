var React = require('react');

module.exports = React.createClass({

    render: function () {
        var location = this.props.location;
        var temp = this.props.temp;

        return (
            <h3>It is {temp} in {location}!</h3>
        )
    }
});