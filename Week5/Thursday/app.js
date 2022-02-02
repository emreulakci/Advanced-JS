let batteryLevel = 0;
const batteryLevelOne = document.querySelector("#batteryLevelOne");
const batteryLevelTwo = document.querySelector("#batteryLevelTwo");
const batteryLevelThree = document.querySelector("#batteryLevelThree");
const batteryText = document.querySelector("#batteryShow");
document.querySelector("#plus").addEventListener("click", fullBattery);
document.querySelector("#minus").addEventListener("click", emptyBattery);
