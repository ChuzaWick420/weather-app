function populate (data) {
    //gets elements
    const target_icons = [
		document.querySelector(".weather_ico"),
		document.querySelector(".stats img")
	];
    
    // const week_days = document.querySelectorAll(".day");

    //populates
    target_icons[0].src = 
    target_icons[1].src =
    `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    //rain probability
    document.querySelector(".rain_prob > img").src =
    `https://openweathermap.org/img/wn/09d.png`

    //overview
    document.querySelector(".UnitValue").innerHTML = (data.main.temp - 273).toFixed(0);
    document.querySelector(".stats p").innerHTML = data.weather[0].description;
    document.querySelector(".place_name").innerHTML = data.name + ", " + data.sys.country;
    document.querySelector(".rain_prob > p").innerHTML = "Rain - " + data.main.humidity + "%";

    //details panel
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