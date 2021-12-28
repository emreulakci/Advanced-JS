/* Arrays are created. i wrote elements twice in array because 5 elements repeat twice.
 The year of birth is entered
 Mod 10 (5*2) of the year of birth gives elements from the elements array. 
 Mod 12 of the year gives animals from the animals array.
 Then element and animal names are displayed together in HTML */
let elements = ["Metal", "Metal", "Water", "Water", "Wood", "Wood", "Fire", "Fire", "Earth", "Earth"];
let animals = ["Monkey", "Rooster", "Dog", "Pig", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Sheep"];
let birthYear = parseInt(prompt("Enter your year of birth"));
let element = birthYear % 10;
let animal = birthYear % 12;
document.getElementById("results").innerHTML = elements[element] + animals[animal];
