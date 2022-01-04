/*the function is written first.
5 Elements are assigned randomly for each array. With these five elements, two new arrays are created.
After that, the elements of the new random arrays are printed side by side to the console.*/
function shuffle(array) {
    let counter = array.length,
        temp, index;
    // While there are elements in the array
    while (counter--) {
        // Pick a random index
        index = (Math.random() * counter) | 0;
        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}
const personalList = ["Bowie", "Boyd", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Conner", "Connolly", "Fauzaan", "Favour", "Fawaz", "Fawkes", "Connor", "Aayan", "Bracken", "Brad"]
let randomPersonal = shuffle(personalList.slice(0)); // array is cloned so it won't be destroyed
randomPersonal.length = 5; // get 5 random elements from Personal List
const groupList = ["Rangers", "Raiders", "Wilds", "Canaries", "Bears"];
let randomGroups = shuffle(groupList.slice(0)); // array is cloned so it won't be destroyed
randomGroups.length = 5; // get 5 random elements from Group List
console.log(`${randomGroups[0]} ${randomPersonal[0]}`);
console.log(`${randomGroups[1]} ${randomPersonal[1]}`);
console.log(`${randomGroups[2]} ${randomPersonal[2]}`);
console.log(`${randomGroups[3]} ${randomPersonal[3]}`);
console.log(`${randomGroups[4]} ${randomPersonal[4]}`);
