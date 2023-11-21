function get_windspeed(data) {

	document.querySelector(".panel:nth-of-type(2) .stat_name").innerHTML = "Wind Speed";
	document.querySelector(".panel:nth-of-type(2) .value").innerHTML = (data.wind.speed).toFixed(1);
	document.querySelector(".panel:nth-of-type(2) .place_name").innerHTML = data.name;

}

function get_suntime(data) {
   
	//sets stat's name
	document.querySelector(".panel:nth-of-type(3) .stat_name").innerHTML = "Sunrise & Sunset";
	
	let sun_rise = document.querySelector(".sun_rise .sun_time_current");
	
	let sun_set =  document.querySelector(".sun_set .sun_time_current");
	
	const unix_sunrise = data.sys.sunrise;
	const unix_sunset = data.sys.sunset;
	
	const date_format = Intl.DateTimeFormat('en-US', {
		hour: "2-digit",
		minute: "2-digit",
		hour12: true
	});

	let sun_rise_time = date_format.format(unix_sunrise * 1000);
	let sun_set_time = date_format.format(unix_sunset* 1000);

	let current_time = date_format.format();

	//sets the time on page
	sun_rise.innerHTML = sun_rise_time;
	sun_set.innerHTML = sun_set_time;
}

function populate (data) {

	//overview
	document.querySelector(".UnitValue").innerHTML = (data.main.temp - 273).toFixed(0);
	document.querySelector(".stats p").innerHTML = data.weather[0].description;
	document.querySelector(".place_name").innerHTML = data.name + ", " + data.sys.country;
	document.querySelector(".rain_prob > p").innerHTML = "Rain - " + data.main.humidity + "%";

	//details panel
	get_suntime(data);
	get_windspeed(data);

	document.querySelector(".panel:nth-of-type(4) .stat_name").innerHTML = "Humidity";
	document.querySelector(".panel:nth-of-type(4) .value").innerHTML = data.main.humidity;
	document.querySelector(".panel:nth-of-type(4) .unit").innerHTML = "%";
	document.querySelector(".panel:nth-of-type(4) .condition").innerHTML = "Normal";
	document.querySelector(".panel:nth-of-type(4) .emote").innerHTML = "😄";
	
	document.querySelector(".panel:nth-of-type(5) .stat_name").innerHTML = "Visibility";
	document.querySelector(".panel:nth-of-type(5) .value").innerHTML = data.visibility / 1000.0;
	document.querySelector(".panel:nth-of-type(5) .unit").innerHTML = "Km";
	document.querySelector(".panel:nth-of-type(5) .condition").innerHTML = "Average";
	document.querySelector(".panel:nth-of-type(5) .emote").innerHTML = "😄";

}

export default populate