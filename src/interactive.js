import { toFaren, toCel } from "./temp_conversion";

function change_temp (caller_type) {
    
    let current_unit = document.querySelector(".UnitType").textContent;
    
    //change units if the previous one was different, overwise ignore
    if (current_unit.endsWith("C") && caller_type == "F") {

        current_unit = current_unit[0] + 'F';

        document.querySelector(".UnitType").textContent = current_unit;

        let main_temp = document.querySelector(".UnitValue");
        main_temp.textContent = toFaren(Number(main_temp.textContent));

    }
    else if (current_unit.endsWith("F") && caller_type == "C") {
        current_unit = current_unit[0] + 'C';

        document.querySelector(".UnitType").textContent = current_unit;

        let main_temp = document.querySelector(".UnitValue");
        main_temp.textContent = toCel(Number(main_temp.textContent));
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