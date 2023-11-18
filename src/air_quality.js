function airquality(data) {
    document.querySelector(".panel:nth-of-type(6) .stat_name").innerHTML = "Air Quality Index";
    document.querySelector(".panel:nth-of-type(6) .value").innerHTML = data.list[0].main.aqi;
    document.querySelector(".panel:nth-of-type(6) .unit").innerHTML = "";

    let condition = document.querySelector(".panel:nth-of-type(6) .condition");
    let emote = document.querySelector(".panel:nth-of-type(6) .emote");

    switch (data.list[0].main.aqi) {
        case 1:
            condition.innerHTML = "Good";
            emote.innerHTML = "😄";
            break;
        case 2:
            condition.innerHTML = "Fair";
            emote.innerHTML = "🙂";
            break;
        case 3:
            condition.innerHTML = "Moderate";
            emote.innerHTML = "😑";
            break;
        case 4:
            condition.innerHTML = "Poor";
            emote.innerHTML = "😟";
            break;
        case 5:
            condition.innerHTML = "Very Poor";
            emote.innerHTML = "😖";
            break;
        default:
            condition.innerHTML = "Invalid";
            break;
    }
}

export default airquality