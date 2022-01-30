// Adds a new student october the list and prints the total number of students
function addStudent() {
    return `${createStudent()}
            <tr>
            <th>Total Student</th>
            <td>${list.length}</td>
            </tr>
        </tbody>`
}
// Create a new student
function createStudent() {
    return list
        .map((student, index) => {
            return `
            <tbody>
            <tr>
                <th>${index+1}</th>
                <td>${student.firstName}</td>
                <td>${student.lastName}</td>
                <td>${student.age}</td>
                <td> <button id="del-${index}" type="button" class="btn btn-danger delete">DELETE</button></td>
            </tr>`
        }).join("")
}
// Prints the start page to the UI
function createUI() {
    headerElement.innerHTML = createHeader();
    formElement.innerHTML = createFormSection();
}
/*
Allows only the number to be entered in the age field
@param {*} pValue
*/
function validateNumber(pValue) {
    if (isNaN(pValue) || pValue == "") {
        alert("Invalid Age!");
        throw new Error("Invalid Age!");
    }
    return (pValue);
}
/**
  Allows you to enter only letters in the name fields (A-Z)
  @param {*} pValue 
 */
function validateText(pValue) {
    if (pValue == "") {
        alert("Invalid Name!");
        throw new Error("Empty!");
    }
    if (!/^[a-zA-Z]*$/g.test(pValue)) {
        alert("Invalid Characters!");
        throw new Error("Invalid Character");
    }
    return (pValue)
}
// Assigns the information in the form to the array, displays the list
function showStudentList() {
    mainElement.addEventListener("click", (event) => {
        event.preventDefault();
        let firstNameArea = document.querySelector("#first-name");
        let lastNameArea = document.querySelector("#last-name");
        let ageArea = document.querySelector("#age");
        if (event.target.id === "add") {
            list.push({
                firstName: validateText(firstNameArea.value),
                lastName: validateText(lastNameArea.value),
                age: validateNumber(ageArea.value)
            })
            firstNameArea.value = "";
            lastNameArea.value = "";
            ageArea.value = "";
            listElement.innerHTML = createStudentListSection();
        }
    })
}
// Deletes a student from the list when clicked
function deleteStudentfromUI() {
    mainElement.addEventListener("click", function(event) {
        if (event.target.className === "btn btn-danger delete") {
            list.filter((student, index) => {
                if (event.target.id === `del-${index}`) {
                    list.splice(index, 1);
                    listElement.innerHTML = createStudentListSection();
                }
            })
        }
    })
}
// Initialization 
function start() {
    createUI();
    showStudentList();
    deleteStudentfromUI();
}
