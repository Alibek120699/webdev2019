// introduction
const city = 'New York City';
function logCitySkyline(){
    let skyscraper = 'Empire State Building';
    return 'The stars over the ' + skyscraper + ' in ' + city;
}
console.log(logCitySkyline());

// global scope
var satellite = 'The Moon';
var galaxy = 'The Milky Way';
var stars = 'North Star';
function callMyNightSky(){
    return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
console.log(callMyNightSky());

// block scope
function logVisibleLight(){
    const lightWave = 'Moonlight';
    console.log(lightWave);
}
logVisibleLight(); // output: Moonlight
console.log(lightWave); // error

// scope pollution
const satellite = 'The Moon';
const stars = 'North Star';
const galaxy = 'The Milky Way';
const callMyNightSky = () => {
    stars = 'Sirius'; // changes the value of stars variable
    return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
console.log(callMyNightSky());
console.log(stars); // output: Sirius

// good scoping
const logVisibleWaves = () => {
    let lightWaves = 'Moonlight';
    let region = 'The Arctic';
    if(region === 'The Arctic'){
        let lightWaves = 'Nothern Lights';
        console.log(lightWaves);
    }
    console.log(lightWaves);
}
logVisibleWaves(); // first output: Nothern Lights; second output: Moonlight