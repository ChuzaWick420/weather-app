let place = "Multan";
const key = "fb2a2791597a787e892e52f451e589a1";

let api_url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`;
let response = fetch(api_url);

response
		.then( (data) => data.json())
		.then( (result) => {

			//debug
			console.log(result);

			get_suntime(result);
		})
		.catch(err => console.log(err))

function get_suntime(data) {
	
	let sun_rise = {
		time : 0,
		gap  : 0
	};
	
	let sun_set = {
		time : 0,
		gap	 : 0
	};
	
	const unix_sunrise = data.sys.sunrise;
	const unix_sunset = data.sys.sunset;
	
	let unit = "";
	let hours;
	let minutes;

	const current_time = new Date();

	//sunrise
	const normal_sunrise = new Date(unix_sunrise * 1000);

	hours = normal_sunrise.getHours();
	minutes = normal_sunrise.getMinutes();

	//time gap
	let gap_hours = (hours - (current_time.getUTCHours() + data.timezone / 3600.0));
	let gap_minutes = 0;

	if (gap_hours >= 0) {
		gap_minutes = minutes - current_time.getMinutes();
	}
	else
		gap_minutes = (60 - minutes) + current_time.getMinutes();

	sun_rise.gap = gap_hours + " h " + gap_minutes + " m";
	
	//24 hours to 12 hours format
	if (hours >= 12){
		hours -= 12;
		unit = "PM";
	}
	else
		unit="AM";

	//sets the formatted time
	let sunrise = hours + ":" + minutes + unit;
	
	//sunset
	const normal_sunset = new Date(unix_sunset * 1000);
	
	hours = normal_sunset.getHours();
	minutes = normal_sunset.getMinutes();
	
	//time gap
	gap_hours = (hours - (current_time.getUTCHours() + data.timezone / 3600.0));
	gap_minutes = 0;

	if (gap_hours >= 0) {
		gap_minutes = minutes - current_time.getMinutes();
	}
	else
		gap_minutes = (60 - minutes) + current_time.getMinutes();

	sun_set.gap = gap_hours + " h " + gap_minutes + " m";

	//24 hours to 12 hours conversion
	if (hours >= 12){
		hours -= 12;
		unit = "PM";
	}
	else
		unit="AM";

	//sets formatted time
	let sunset = hours + ":" + minutes + unit;

    console.log(sun_rise);
    console.log(sun_set);

}