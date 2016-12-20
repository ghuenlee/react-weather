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
                <form onSubmit={this.onFormSubmit}>
                    <input type="search" ref="city" placeholder="Search weather by city..." />
                    <button className="button expanded hollow">Get Weather</button>
                </form>
            </div>
        );
    }
});