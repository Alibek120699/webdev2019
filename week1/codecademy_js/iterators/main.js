// the .forEach() method
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
fruits.forEach(el => console.log('I want to eat a ' + el));

// the .map() method
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
const secretMessage = animals.map(el => {
    return el[0];
});
console.log(secretMessage.join('')); // output: HelloWorld

const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(el => {
    return el/100;
});

// the .filter() method
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbers = randomNumbers.filter(el => {
    return el < 250;
});
console.log(smallNumbers); // output: [ 200, 3.14, 7, 13 ]

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter(el => {
    return el.length > 7;
});
console.log(longFavoriteWords); // output: [ 'nostalgia', 'hyperbole', 'esoteric' ]

// the .findIndex() method
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex(el => {
    return el === 'elephant';
});
console.log(foundAnimal); // output: 7
const startsWithS = animals.findIndex(el => {
    return el[0] === 's';
});
console.log(startsWithS); // output: 3

// the .reduce() method
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
    console.log('The value of accumulator: ', accumulator);
    console.log('The value of currentValue: ', currentValue);
    return accumulator + currentValue;
}, 10); /* outputs:
The value of accumulator:  10
The value of currentValue:  1
The value of accumulator:  11
The value of currentValue:  3
The value of accumulator:  14
The value of currentValue:  5
The value of accumulator:  19
The value of currentValue:  7
26*/
console.log(newSum); // output: 26

// iterator documentation
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
console.log(words.some((word) => {
    return word.length < 6;
}));
const interestingWords = words.filter(el => {
    return el.length > 5;
});
console.log(interestingWords.every((word) => {
    return word.length > 5;
} ));

//choose the right iterator

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);
