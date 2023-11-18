function get_suntime(data) {
   
    document.querySelector(".panel:nth-of-type(3) .stat_name").innerHTML = "Sunrise & Sunset";
    
    let sun_rise = {
        time : document.querySelector(".sun_rise .sun_time_current"),
        gap : document.querySelector(".sun_rise .sun_time_left")
    };
    
    let sun_set = {
        time : document.querySelector(".sun_set .sun_time_current"),
        gap : document.querySelector(".sun_set .sun_time_left")
    };
    
    const unix_sunrise = data.sys.sunrise;
    const unix_sunset = data.sys.sunset;
    
    let unit = "";
    let hours;
    let minutes;

    const current_time = new Date();

    const normal_sunrise = new Date(unix_sunrise * 1000);

    hours = normal_sunrise.getHours();
    minutes = normal_sunrise.getMinutes();

    //time gap
    sun_rise.gap.innerHTML = (hours - current_time.getHours()) + " h " + (minutes - current_time.getMinutes()) + " m";
    
    if (hours >= 12){
        hours -= 12;
        unit = "PM";
    }
    else
    unit="AM";

    let sunrise = hours + ":" + minutes + unit;
    
    const normal_sunset = new Date(unix_sunset * 1000);
    
    hours = normal_sunset.getHours();
    minutes = normal_sunset.getMinutes();
    
    sun_set.gap.innerHTML = (hours - current_time.getHours()) + " h " + (minutes - current_time.getMinutes()) + " m";
    
    if (hours >= 12){
        hours -= 12;
        unit = "PM";
    }
    else
        unit="AM";

    let sunset = hours + ":" + minutes + unit;

    sun_rise.time.innerHTML = sunrise;
    sun_set.time.innerHTML = sunset;
}

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
    get_suntime(data);

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