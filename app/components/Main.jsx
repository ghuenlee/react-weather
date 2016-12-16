var React = require('react');
var Nav = require('Nav');

// Main, About, Nav and Examples, since stateless, were modified to support the new ES6
// arrow function!

var Main = (props) => {
    return (
        <div>
            <Nav />
            <h2>Main Component!</h2>
            {props.children}
        </div>
    );
}


module.exports = Main;