function get_multi_days(data) {

    for (let index = 0; index < 7; index++) {
        
        let reference = new Date(data.daily.time[index]);

        let day_name = document.querySelector(`.day:nth-of-type(${index+1}) .dayname`);

        let day_high = document.querySelector(`.day:nth-of-type(${index+1}) .high span:nth-of-type(1)`);
        let day_low = document.querySelector(`.day:nth-of-type(${index+1}) .low span:nth-of-type(1)`);

        day_name.innerHTML = reference.toLocaleDateString("en-US", {weekday: "short"})

        day_high.innerHTML = (data.daily.temperature_2m_max[index]).toFixed(0);
        day_low.innerHTML = (data.daily.temperature_2m_min[index]).toFixed(0);

    }

    console.log(data);

}

export default get_multi_days