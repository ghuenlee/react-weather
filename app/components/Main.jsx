var React = require('react');
var Nav = require('Nav');

// Main, About, Nav and Examples, since stateless(don't use states), were modified to support the new ES6
// arrow function!

var Main = (props) => {
    // basically translates to: var Main = function(props) {}
    return (
        <div>
            <Nav />
            <div className="row">
                <div className="columns medium-6 large-4 small-centered">
                    {props.children}
                </div>
            </div>

        </div>
    );
};


module.exports = Main;