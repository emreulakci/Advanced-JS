/**
  School Registration System
  1.A form will be created on the left side of the screen,
  2.The information entered in the form will be checked according to its category (digit or alphabetical check)
  3.An "add" button will be placed on the form,
  4.When the button is clicked, the Form information will be thrown into an array, 
  5.The information stored in Array will be printed on the right side of the screen,
  6.The total number of students will be printed at the end of the list.
 */
const mainElement = document.querySelector("#app");
const headerElement = document.querySelector("#nav-header");
const formElement = document.querySelector("#form-section");
const listElement = document.querySelector("#list-section");
let list = [];
start();
