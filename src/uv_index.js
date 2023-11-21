function get_uv(data) {
    let guage_val = document.querySelector(".guage_secondary span");
    let guage_fill = document.querySelector(".fill_bar");

    let rotation = 180 / 12  * data.data[0].uv;
    guage_val.innerHTML = (rotation / 180 * 100).toFixed(0) + "%";
    guage_fill.style["transform"] = `rotate(${rotation}deg)`;
}

export default get_uv