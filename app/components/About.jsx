var React = require('react');

var About = () => {
    return (
        <div>
            <h2 className="text-center page-title">About</h2>
            <p className="text-justify">Created following a course on ReactJS, provided by Anrew J. Mead. If you see this, Andrew, Thank you from the bottom of my heart!
            I've followed your tutorials and think you're a really fabulous instructor!</p>
            <p>Tools used in this tutorial:</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">ReactJS</a> - This is the front-end JS framework used!
                </li>
                <li>
                    <a href="http:/openweathermap.org">OpenWeatherMap</a> - I used OpenWeatherMap as the API for fetching weather data by city name!
                </li>
            </ul>
        </div>
    );
};

module.exports = About;