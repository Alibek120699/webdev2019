// repeating tasks manually
var vacationSpots = ['Almaty', 'Taldykorgan', 'Aktau'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

// the for loop
for(let i=5; i<=10; i++){
    console.log(i);
}

// looping in reverse
for(let counter=3; counter>=0; counter--){
    console.log(counter);
}

// looping through arrays
const vacationSpots = ['Bali', 'Paris', 'Tulum'];
for(let i = 0; i< vacationSpots.length; i++){
    console.log(vacationSpots[i]);
}

//nested loops
var tinasFollowers = ['Roman', 'Aibek', 'Dauren'];
var bobsFollowers = ['Roman', 'Iskander', 'Aibek', 'Islam'];
var mutualFollowers = [];
for(let i = 0; i<tinasFollowers.length; i++){
    for(let j=0; j<bobsFollowers.length; j++){
        if(tinasFollowers[i]==bobsFollowers[j]){
            mutualFollowers.push(bobsFollowers[j]);
        }
    }
}

// the while loop
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;
while(currentCard != 'spade'){
    currentCard = cards[Math.floor(Math.random()*4)];
    console.log(currentCard);
}

// do...while statements
var capsOfSugarNeeded = 0;
var capsAdded = 0;
do{
    capsAdded++;
    console.log(capsAdded); // output: 1
}while(capsAdded<capsOfSugarNeeded); // do...while statements run at least once even condition doesn't occur

// break keyword
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
for(let i=0; i<rapperArray.length; i++){
    console.log(rapperArray[i]);
    if(rapperArray[i] === "Notorious B.I.G."){
        break; // after this loop stops
    }
}
console.log("And if you don't know, now you know.");


