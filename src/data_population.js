function populate (data) {
    //gets elements
    const target_icons = [
		document.querySelector(".weather_ico"),
		document.querySelector(".stats img")
	];
    
    //populates
    target_icons[0].src = 
    target_icons[1].src =
    `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    //rain probability
    document.querySelector(".rain_prob > img").src =
    `https://openweathermap.org/img/wn/09d.png`

    document.querySelector(".UnitValue").innerHTML = (data.main.temp - 273).toFixed(0);
    document.querySelector(".stats p").innerHTML = data.weather[0].description;
    document.querySelector(".place_name").innerHTML = data.name + ", " + data.sys.country;
    document.querySelector(".rain_prob > p").innerHTML = "Rain - " + data.main.humidity + "%";

}

export default populate