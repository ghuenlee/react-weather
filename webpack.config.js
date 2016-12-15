module.exports = {
	entry: './app/app.jsx',
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		alias: {
			Main: 'app/components/Main.jsx',
			Weather: 'app/components/Weather.jsx',
			Nav: 'app/components/Nav.jsx',
			About: 'app/components/About.jsx',
			Examples: 'app/components/Examples.jsx',
			WeatherForm: 'app/components/WeatherForm.jsx',
<<<<<<< HEAD
			WeatherMessage: 'app/components/WeatherMessage.jsx',
			openWeatherMap: 'app/api/openWeatherMap.jsx'
=======
			WeatherMessage: 'app/components/WeatherMessage.jsx'
>>>>>>> b2da5667e30e783c76d031ba130eada1cee38967
		},
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [{
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015']
			},
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/
		}]
	}
};