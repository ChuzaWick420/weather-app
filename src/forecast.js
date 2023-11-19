function get_five_days(data) {

    let offset = 8;

    for (let index = 0; index < 5; index++) {
        
        let reference = new Date(data.list[index * offset].dt_txt);

        let day_name = document.querySelector(`.day:nth-of-type(${index+1}) .dayname`);

        let day_high = document.querySelector(`.day:nth-of-type(${index+1}) .high span:nth-of-type(1)`);
        let day_low = document.querySelector(`.day:nth-of-type(${index+1}) .low span:nth-of-type(1)`);

        let day_ico = document.querySelector(`.day:nth-of-type(${index+1}) img`)

        day_name.innerHTML = reference.toLocaleDateString("en-US", {weekday: "short"})

        day_high.innerHTML = (data.list[index * offset].main.temp_max - 273).toFixed(0);
        day_low.innerHTML = (data.list[index * offset].main.temp_min - 273).toFixed(0);

        day_ico.src = `https://openweathermap.org/img/wn/${data.list[index * offset].weather[0].icon}.png`;

    }

}

export default get_five_days