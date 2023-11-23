function debug() {
    let ele = document.querySelector(".day");

    let ratio = ele.getBoundingClientRect().width / ele.getBoundingClientRect().height;
    console.log(ratio.toFixed(2));
}