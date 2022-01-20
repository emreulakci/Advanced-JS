/**  
 1 The program simulates the filling and emptying of a battery.
 2 A picture of the battery's empty state is displayed on the web page.
 3 The battery can be charged and discharged with the help of the two buttons on the page (+ and -).
 4 The color is changed according to the charge percentage of the battery.   */
let fullBattery = () => {
    if (batteryLevel < 3) {
        batteryLevel++;
    }
    batteryColor();
    batteryText();
}

let emptyBattery = () => {
    if (batteryLevel > 0) {
        batteryLevel--;
    }
    batteryColor();
    batteryText();
}
let batteryColor = () => {
    if (batteryLevel === 0) {
        batteryLevelOne.style["background-color"] = "white";
        batteryLevelTwo.style["background-color"] = "white";
        batteryLevelThree.style["background-color"] = "white";
    } else if (batteryLevel === 1) {
        batteryLevelOne.style["background-color"] = "red";
        batteryLevelTwo.style["background-color"] = "white";
        batteryLevelThree.style["background-color"] = "white";
    } else if (batteryLevel === 2) {
        batteryLevelOne.style["background-color"] = "orange";
        batteryLevelTwo.style["background-color"] = "orange";
        batteryLevelThree.style["background-color"] = "white";
    } else if (batteryLevel === 3) {
        batteryLevelOne.style["background-color"] = "green";
        batteryLevelTwo.style["background-color"] = "green";
        batteryLevelThree.style["background-color"] = "green";
    }
}
let batteryPercentage = () => {
    if (batteryLevel === 0) {
        batteryRate.innerHTML = "%0";
    } else if (batteryLevel === 1) {
        batteryRate.innerHTML = "%33";
    } else if (batteryLevel === 2) {
        batteryRate.innerHTML = "%66";
    } else if (batteryLevel === 3) {
        batteryRate.innerHTML = "% 100 ";
    }
}
