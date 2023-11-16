const key = "fb2a2791597a787e892e52f451e589a1";

function get_weather(place) {

	const target_icons = [
		document.querySelector(".weather_ico"),
		document.querySelector(".stats img")
	];
	const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`;
	const response = fetch(api_url);

	response
		.then( (data) => data.json())
		.then( (result) => {

			//debug
			console.log(result);

			target_icons[0].src = 
			target_icons[1].src =
			`https://openweathermap.org/img/wn/${result.weather[0].icon}.png`;

			//rain probability
			document.querySelector(".rain_prob > img").src =
			`https://openweathermap.org/img/wn/09d.png`

			document.querySelector(".UnitValue").innerHTML = (result.main.temp - 273).toFixed(0);
			document.querySelector(".stats p").innerHTML = result.weather[0].description;
			document.querySelector(".place_name").innerHTML = result.name + ", " + result.sys.country;
			document.querySelector(".rain_prob > p").innerHTML = "Rain - " + result.main.humidity + "%";
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