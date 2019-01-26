// function without parameters
function getGreeting(){
    console.log('Hello, World!');
}
// calling the function
getGreeting();

// function with parameter
function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}
// calling the function
sayThanks('Cole');

// function with default parameters
function makeShoppingList(item1='milk', item2='bread', item3='eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}

makeShoppingList();
/*output: Remember to buy milk
Remember to buy bread
Remember to buy eggs*/

makeShoppingList('cake', 'cheese', 'chocolate');
/*output: Remember to buy cake
Remember to buy cheese
Remember to buy chocolate*/

// function return
function monitorCount(rows, columns){
    return rows*columns;
}
const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);

//helper function
function monitorCount(rows, columns) {
    return rows * columns;
}
//using helper function in another function
function costOfMonitors(rows, columns){
    return 200*monitorCount(rows, columns);
}
const totalCost = costOfMonitors(5, 4);
console.log(totalCost);

// anonymous function
const plantNeedsWater = function(day) {
    if(day === 'Wednesday'){
      return true;
    } else {
      return false;
    }
};
// calling anonymous function
plantNeedsWater('Tuesday');
console.log(plantNeedsWater('Tuesday'));

//arrow functions
const plantNeedsWater = (day) => {
    if(day === 'Tuesday'){
        return true;
    }
    else{
        return false;
    }
};

//concise body arrow function
const plantNeedsWater = day => day === 'Wednesday' ? true : false;