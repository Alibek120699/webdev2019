// creating object literals
let fasterShip = {
    color: 'silver',
    'Fule Type': 'Turbo Fuel'
};


let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    'Active Mission': true,
    'Secret Mission': 'Discover life outside of Earth',
    flightPath: ['Venus', 'Mars', 'Saturn']
};

// accessing properties
var crewCount = spaceship.numCrew;
var planetArray = spaceship.flightPath;

// bracket notation
let spaceship2 = {
    'Active Mission': true
};
var propName = 'Active Mission';
console.log(spaceship2[propName]); // output: true

// property assignment
spaceship.color = 'glorious gold'; // changes property's value
spaceship.numEngines = 7; // add new property
delete spaceship['Secret Mission']; // removed property named 'Secret Mission'

// methods
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';
let alienShip = {
    retreat(){
        console.log(retreatMessage);
    },
    takeOff(){
        console.log('Spim... Borp... Glix... Blastoff!');
    }
};
alienShip.retreat();
alienShip.takeOff();

// nested objects
let spaceship = {
    passengers: null,
    telescope: {
        yearBuilt: 2018,
      model: "91031-XLT",
        focalLength: 2032 
    },
    crew: {
        captain: { 
            name: 'Sandra', 
            degree: 'Computer Engineering', 
            encourageTeam() { console.log('We got this!') },
            'favorite foods': ['cookies', 'cakes', 'candy', 'spinach']
        }
    },
    engine: {
        model: "Nimbus2000"
    },
    nanoelectronics: {
        computer: {
            terabytes: 100,
            monitors: "HD"
        },
        backup: {
            battery: "Lithium",
            terabytes: 50
        }
    }
};
let capFave = spaceship.crew.captain['favorite foods'][0];
spaceship.passengers = [{name: 'Alibek'}];
let firstPassenger = spaceship.passengers[0];

// pass by reference
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
};
const greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil';
};
const remotelyDisable = obj => {
    obj.disabled = true;
};
greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship); /* output:
{ 'Fuel Type': 'avocado oil',
homePlanet: 'Earth',
disabled: true }*/

// looping through objects
let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 
for(let el in spaceship.crew){
  console.log(`${el}: ${spaceship.crew[el].name}`)
}
for(let el in spaceship.crew){
  console.log(`${spaceship.crew[el].name}: ${spaceship.crew[el].degree}`);
}