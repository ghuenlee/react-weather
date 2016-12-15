var React = require('react');

module.exports = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        var location = this.refs.city.value;

        if (location.length > 0) {
            this.refs.city.value = '';
            this.props.onSearch(location);
        }
    },
    render: function () {
        return (
            <div>
                <h1>Get Weather</h1>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="city" placeholder="City name" />
                    <button>Get Weather</button>
                </form>
            </div>
        )
    }
});