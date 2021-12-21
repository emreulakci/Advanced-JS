/* If there are cows or sheep among the animals, 4 is added to the number of halal legs. If not, and there is chicken, 2 is added to the number of halal legs. Jayvans other than this are added to 0 because they are not halal. */
let animalList = ["pig", "cow", "cow", "chicken", "sheep"]
let totalHalalLegs = 0
for (let i = 0; i < animalList.length; i++) {
    let animal = animalList[i];
    //Cows and sheep have 4 legs
    if (animal === "cow" ||
        animal === "sheep") { totalHalalLegs += 4; }
    //Chickes have 2 legs
    else if (animal === "chicken") { totalHalalLegs += 2 }
    //Others are not added the total value because they are not halal.
    else { totalHalalLegs += 0 }
}
console.log(totalHalalLegs);
