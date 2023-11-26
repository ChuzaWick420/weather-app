import { toFaren, toCel } from "./temp_conversion";

function change_temp (caller_type, days = 7) {
    
    let current_unit = document.querySelector(".UnitType").textContent;
    
    if (current_unit[1] == caller_type) return;
    //else

    //updates unit
    current_unit = current_unit[0] + caller_type;
    document.querySelector(".UnitType").textContent = current_unit;

    //update values
    let main_temp_txt = document.querySelector(".UnitValue");
    let main_temp = Number(main_temp_txt.textContent);

    main_temp = (caller_type == 'C') ? toCel(main_temp) : toFaren(main_temp);
    main_temp_txt.textContent = main_temp;

    for (let i = 0; i < days; i++) {
        let high_txt = document.querySelector(`.day:nth-of-type(${i + 1}) .high > span`);
        let low_txt = document.querySelector(`.day:nth-of-type(${i + 1}) .low > span`);

        let high = Number(high_txt.textContent);
        let low = Number(low_txt.textContent);

        high = (caller_type == 'C') ? toCel(high) : toFaren(high);
        low = (caller_type == 'C') ? toCel(low) : toFaren(low);

        high_txt.textContent = high;
        low_txt.textContent = low;
    }

    for (let x = 1; x <= 2; x++) {
        let button =  document.querySelector(`.temp_units:nth-of-type(${x})`);
        button.classList.toggle("active");
    }

}

function temp_conversion_build() {
    let toCel_button = document.querySelector(".temp_units:nth-of-type(1)");
    let toFaren_button = document.querySelector(".temp_units:nth-of-type(2)");

    toFaren_button.addEventListener("click", 
    () => change_temp("F"));
    toCel_button.addEventListener("click", 
    () => change_temp("C"));
}

export default temp_conversion_build