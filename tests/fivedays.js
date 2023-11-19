let place = "Multan";
const key = "fb2a2791597a787e892e52f451e589a1";

let api_url = `https://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=${key}`;
let response = fetch(api_url);

response
		.then( (data) => data.json())
		.then( (result) => {

			//debug
			console.log(result);

		})
		.catch(err => console.log(err))