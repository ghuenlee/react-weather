var React = require('react');

var ErrorModal = React.createClass({

    getDefaultProps: function () {
        return {
            title: 'Error'
        };
    },
    propTypes: {
        title: React.PropTypes.string,
        errMsg: React.PropTypes.string.isRequired
    },
    componentDidMount: function () {
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    render: function () {
        var {errMsg, title} = this.props;
        return (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h3>{title}</h3>
                <p>{errMsg}</p>
                <p>
                    <button className="button hollow" data-close="">
                        Close
                    </button>
                </p>
            </div>
        );
    }
});

module.exports = ErrorModal;