/*const url = 'https://weather1060.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c272042cc6mshb4503e1cc29f875p163276jsna950483a01d5',
		'x-rapidapi-host': 'weather1060.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
	*/
/*const url = 'https://weather-api-algobook.p.rapidapi.com/forecast/london';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c272042cc6mshb4503e1cc29f875p163276jsna950483a01d5',
		'x-rapidapi-host': 'weather-api-algobook.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
	*/
	
/*	const url = 'https://weather.algobook.info/forecast/Delhi';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c272042cc6mshb4503e1cc29f875p163276jsna950483a01d5',
		'x-rapidapi-host': 'weather-api-algobook'
	}
};

// Wrap the code inside an async function to allow await usage
(async () => {
	try {
		const response = await fetch(url, options);
		const result = await response.text();

		console.log(result);
        (function (reponse) {

			minTempCelsius.innerHTML = reponse.minTempCelsius;
			minTempFarenheit.innerHTML = reponse.minTempFarenheit;
			maxTempCelsius.innerHTML = reponse.maxTempCelsius;
			maxTempFarenheit.innerHTML = reponse.maxTempFarenheit;
			windAverageMs.innerHTML = reponse.windAverageMs;
			windAverageKmh.innerHTML = reponse.windAverageKmh;
			windAverageMph.innerHTML = reponse.windAverageMph;
			windDirection.innerHTML = reponse.windDirection;
			symbol.innerHTML = reponse.symbol;
			forecastText.innerHTML = reponse.forecastText;
		} )
	} catch (error) {
		console.error(error);
	}
})();
*/
/*const url = 'https://weather.algobook.info/forecast/Delhi';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c272042cc6mshb4503e1cc29f875p163276jsna950483a01d5',
		'x-rapidapi-host': 'weather-api-algobook'
	}
};

// Wrap the code inside an async function to allow await usage
(async () => {
	try {
		const response = await fetch(url, options);
		// Parse the response as JSON
		const result = await response.json();

		console.log(result);
        
        // Now use the parsed result to update the DOM
		// const minTempCelsiusId = document.getElementById('minTempCelsius');
		// const minTempFarenheit = document.getElementById('minTempFarenheit');
		// const maxTempCelsius = document.getElementById('maxTempCelsius');
		// const maxTempFarenheit = document.getElementById('maxTempFarenheit');
		// const windAverageMs = document.getElementById('windAverageMs');
		// const windAverageKmh = document.getElementById('windAverageKmh');
		// const windAverageMph = document.getElementById('windAverageMph');
		// const windDirection = document.getElementById('windDirection');
		// const symbol = document.getElementById('symbol');
		// const forecastText = document.getElementById('forecastText');
		// (function (response) {
			// Make sure to use the correct spelling: "response"
			minTempCelsius.innerHTML = result.minTempCelsius
			minTempFarenheit.innerHTML =result.minTempFarenheit
			maxTempCelsius.innerHTML = result.maxTempCelsius
			maxTempFarenheit.innerHTML = result.maxTempFarenheit
			windAverageMs.innerHTML = result.windAverageMs
			windAverageKmh.innerHTML = result.windAverageKmh
			windAverageMph.innerHTML = result.windAverageMph
			windDirection.innerHTML = result.windDirection
			symbol.innerHTML = result.symbol
			forecastText.innerHTML = result.forecastText
	//	})(result); // Call the function and pass the result object

	} catch (error) {
		console.error(error);
	}
})();
*/
/*const url = 'https://weather.algobook.info/forecast/Delhi';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c272042cc6mshb4503e1cc29f875p163276jsna950483a01d5',
		'x-rapidapi-host': 'weather-api-algobook'
	}
};

// Fetch the weather data
fetch(url, options)
	.then(response => response.json())  // Parse the response as JSON
	.then((response) => {
		// Log the result to inspect the actual data structure
		console.log(response);
		
		// // Assuming you're fetching data for 'today' (first index)
		// const todayWeather = result[0];

		// // Now use the parsed result to update the DOM elements
		// // Make sure the element IDs match the HTML DOM elements on your page
		// document.getElementById('minTempCelsius').innerHTML = todayWeather.minTempCelsius || "N/A";
		// document.getElementById('minTempFarenheit').innerHTML = todayWeather.minTempFarenheit || "N/A";
		// document.getElementById('maxTempCelsius').innerHTML = todayWeather.maxTempCelsius || "N/A";
		// document.getElementById('maxTempFarenheit').innerHTML = todayWeather.maxTempFarenheit || "N/A";
		// document.getElementById('windAverageMs').innerHTML = todayWeather.windAverageMs || "N/A";
		// document.getElementById('windAverageKmh').innerHTML = todayWeather.windAverageKmh || "N/A";
		// document.getElementById('windAverageMph').innerHTML = todayWeather.windAverageMph || "N/A";
		// document.getElementById('windDirection').innerHTML = todayWeather.windDirection || "N/A";
		// document.getElementById('symbol').innerHTML = todayWeather.symbol || "N/A";
		// document.getElementById('forecastText').innerHTML = todayWeather.formattedDay || "N/A";
	
minTempCelsius.innerHTML = response.minTempCelsius 
minTempFarenheit.innerHTML = response.minTempFarenheit 
maxTempCelsius.innerHTML = response.maxTempCelsius 
maxTempFarenheit.innerHTML = response.maxTempFarenheit 
windAverageMs.innerHTML = response.windAverageMs 
windAverageKmh.innerHTML = response.windAverageKmh 
windAverageMph.innerHTML = response.windAverageMph 
windDirection.innerHTML = response.windDirection 
symbol.innerHTML = response.symbol 
forecastText.innerHTML = response.forecastText 
	})
	.catch(error => {
		// Handle any errors
		console.error('Error fetching weather data:', error);
	});

*/
const url = 'https://weather.algobook.info/forecast?city=';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c272042cc6mshb4503e1cc29f875p163276jsna950483a01d5',
		'x-rapidapi-host': 'weather-api-algobook'
	}
};

// Fetch the weather data
const getWeather =(city)=>{
cityName.innerHTML=city
fetch(url +city, options)
	.then(response => response.json())  // Parse the response as JSON
	.then(result => {
		// Log the result to inspect the actual data structure
		console.log(result);
		
		// Assuming the data is in result[0] (for today)
	    //const todayWeather = result[0];
		const forecast = result.forecast;

		// Assuming the data is in forecast[0] (for today)
		const todayWeather = forecast[0];


		// Check if the todayWeather object exists before using its properties
		if (todayWeather) {
			// Now use the parsed result to update the DOM elements
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
		// Handle any errors
		console.error('Error fetching weather data:', error);
	});
}
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})
 getWeather("Delhi")