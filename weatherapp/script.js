const url = 'https://weather.algobook.info/forecast?city=';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c272042cc6mshb4503e1cc29f875p163276jsna950483a01d5',
		'x-rapidapi-host': 'weather-api-algobook'
	}
};

const getWeather =(city)=>{
cityName.innerHTML=city
fetch(url +city, options)
	.then(response => response.json()) 
	.then(result => {
		console.log(result);
		
		const forecast = result.forecast;

		const todayWeather = forecast[0];


		if (todayWeather) {
			document.getElementById('minTempCelsius').innerHTML = todayWeather.minTempCelsius !== undefined ? todayWeather.minTempCelsius : "N/A";
			document.getElementById('minTempFarenheit').innerHTML = todayWeather.minTempFarenheit !== undefined ? todayWeather.minTempFarenheit : "N/A";
			document.getElementById('maxTempCelsius').innerHTML = todayWeather.maxTempCelsius !== undefined ? todayWeather.maxTempCelsius : "N/A";
			document.getElementById('maxTempFarenheit').innerHTML = todayWeather.maxTempFarenheit !== undefined ? todayWeather.maxTempFarenheit : "N/A";
			document.getElementById('windAverageMs').innerHTML = todayWeather.windAverageMs !== undefined ? todayWeather.windAverageMs : "N/A";
			document.getElementById('windAverageKmh').innerHTML = todayWeather.windAverageKmh !== undefined ? todayWeather.windAverageKmh : "N/A";
			document.getElementById('windAverageMph').innerHTML = todayWeather.windAverageMph !== undefined ? todayWeather.windAverageMph : "N/A";
			document.getElementById('windDirection').innerHTML = todayWeather.windDirection !== undefined ? todayWeather.windDirection : "N/A";
			document.getElementById('symbol').innerHTML = todayWeather.symbol !== undefined ? todayWeather.symbol : "N/A";
			document.getElementById('formattedDay').innerHTML = todayWeather.formattedDay!== undefined ? todayWeather.formattedDay: "N/A";
		} else {
			console.error("No weather data available.");
		}
	})
	.catch(error => {
		console.error('Error fetching weather data:', error);
	});
}
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})
 getWeather("Delhi")
