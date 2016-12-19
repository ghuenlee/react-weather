var React = require('react');
var Link = require('react-router').Link;

var Examples = () => {
    return (
        <div>
            <h1 className="text-center">Stateless Examples Route </h1>
            <p> Here is a fucking example:</p>
            <ol>
                <li>
                    <Link to="/?location=Constantine,DZ">Constantine, DZ</Link>
                </li>
                <li>
                    <Link to="/?location=Annaba,DZ">Annaba, DZ</Link>
                </li>
            </ol>
        </div>

    );
};

module.exports = Examples;