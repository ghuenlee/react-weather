var React = require('react');
var Link = require('react-router').Link;

var Examples = () => {
    return (
        <div>
            <h2 className="text-center page-title">Examples</h2>
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