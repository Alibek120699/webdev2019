// introduction
let newYearResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
console.log(newYearResolutions); // output: [ 'Keep a journal', 'Take a falconry class', 'Learn to juggle' ]

// create an array
const hobbies = ['football', 'music', 'chess'];
console.log(hobbies); //output: [ 'football', 'music', 'chess' ]

// accessing elements
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
let listItem = famousSayings[0];
console.log(listItem); // output: Fortune favors the brave.
console.log(famousSayings[2]); // output: Where there is love there is life.
console.log(famousSayings[3]); // output: undefined

// update elements
let gloceryList = ['bread', 'tomatoes', 'milk'];
gloceryList[1] = 'avocados'; // now gloceryList = [ 'bread', 'avocados', 'milk' ]

// arrays with const and let
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
condiments[0] = 'Mayo';
console.log(condiments); // output: [ 'Mayo', 'Mustard', 'Soy Sauce', 'Sriracha' ]
condiments = ['Mayo'];
console.log(condiments); // output: [ 'Mayo' ]
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
utensils[3] = 'Spoon';
console.log(utensils); // output: [ 'Fork', 'Knife', 'Chopsticks', 'Spoon' ]

// the .length property
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length); // output: 3

// the .push() method
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('4', 5);
console.log(chores); // output: [ 'wash dishes', 'do laundry', 'take out trash', '4', 5 ]

// the .pop() method
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop(); // removes last element of the array
console.log(chores.pop()); // output: cook dinner

// more array methods
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift(); // removes from the front of an array
console.log(groceryList); // output: [ 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains' ]
groceryList.unshift('popcorn'); // add to the front of an array
console.log(groceryList); // output: [ 'popcorn', bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains' ]
console.log(groceryList.slice(1, 4)); // range: [1; 4), output: [ 'bananas', 'coffee beans', 'brown rice' ]
console.log(grocery); // .slice() method doesn't mutate groceryList array, it only copies the array in the certain range
const pastaIndex = grocery.indexOf('pasta'); // if there isn't such element returns -1, else returns index of the given element
console.log(pastaIndex); // output: 4

// arrays and functions
const concept = ['arrays', 'can', 'be', 'mutated'];
function changeArr(arr){
    arr[3] = 'MUTATED';
}
changeArr(concept);
console.log(concept); // output: [ 'arrays', 'can', 'be', 'MUTATED' ]
function removeElement(newArr){
    newArr.pop();
}
removeElement(concept);
console.log(concept); // output: [ 'arrays', 'can', 'be' ]

// nested array
var numberClusters = [[1, 2], [3, 4], [5, 6]];
const target = numberClusters[2][1]; // target = 6
