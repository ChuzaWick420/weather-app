import populate from "./data_population.js"
import airquality from "./air_quality.js";

const key = "fb2a2791597a787e892e52f451e589a1";

function get_weather(place) {

	const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`;
	const response = fetch(api_url);

	response
		.then( (data) => data.json())
		.then( (result) => {

			//debug
			console.log(result);

			populate(result);
			get_AQI(result.coord.lat, result.coord.lon);	
		})
		.catch(err => console.log(err))
}

function get_AQI(lat, lon) {
	const api_url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${key}`;
	const response = fetch(api_url);
	response
		.then( (data) => data.json())
		.then( (result) => {

			//debug
			console.log(result);

			airquality(result);			
		})
		.catch(err => console.log(err))
}

function get_input() {
	let search_bar = document.querySelector(".search_bar");

	search_bar.addEventListener(
		"keydown",
		(pressed_key) => {
			if (pressed_key.key == "Enter" && search_bar.value != ""){
				pressed_key.preventDefault();
				get_weather(search_bar.value);
			}
		}
	);
}

setTimeout(get_input, 1000);