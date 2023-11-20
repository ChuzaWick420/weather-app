function extract_icons (data, forecast_index) {
    
    for (let i = 0; i < forecast_index; i++) {
        
        let day_ico = document.querySelector(`.day:nth-of-type(${i+1}) img`)
        
        let icon_id = data.data[i].weather.icon;
        let icon_url = `https://cdn.weatherbit.io/static/img/icons/${icon_id}.png`;

        day_ico.src = icon_url;
    }

    //current day
    let icon_id = data.data[i].weather.icon;
    
    //gets elements
	const target_icons = [
		document.querySelector(".weather_ico"),
		document.querySelector(".stats img")
	];
	
	target_icons[0].src = 
	target_icons[1].src =
	`https://cdn.weatherbit.io/static/img/icons/${icon_id}.png`;
}


async function get_icons(lat, lon, forecast_index) {
    const key = "2a686766fabd42d99f08175409da1443";
    let weatherbit_api = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${key}`;
    try {
        let response = await fetch(weatherbit_api);
        let data = await response.json();
        extract_icons(data, forecast_index);
    }
    catch (err) {
        console.log(err);
    }
}

export default get_icons