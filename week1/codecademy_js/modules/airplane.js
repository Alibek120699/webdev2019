// default export

let Airplane = {};
Airplane.availableAirplanes = [{name: 'AeroJet', fuelCapacity: 800}, {name: 'SkyJet', fuelCapacity: 500}];
export default Airplane;

// named export
let availableAirplanes = [];
let AeroJet = {availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators']};
let SkyJet = {availableStaff: ['pilots', 'flightAttendants']};
availableAirplanes.push(AeroJet, SkyJet);
let flightRequirements = {requiredStaff: 4};
const meetsStaffRequirements = (availableStaff, requiredStaff) => {
  if(availableStaff.length >= requiredStaff){
    return true;
  }
  else{
    return false;
  }
};
export {availableAirplanes, flightRequirements, meetsStaffRequirements};

// export named exports
export let availableAirplanes = [{
    name: 'AeroJet',
    maxSpeed: 1200,
    minSpeed: 300,
    fuelCapacity: 800,
    availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
   }, 
   {name: 'SkyJet',
    maxSpeed: 800,
    minSpeed: 200,
    fuelCapacity: 500,
    availableStaff: ['pilots', 'flightAttendants']
}];
   
export let flightRequirements = {
     requiredStaff: 4,
     requiredSpeedRange: 700
};
   
export function meetsStaffRequirements(availableStaff, requiredStaff) {
     if (availableStaff.length >= requiredStaff) {
       return true;
     } else {
       return false;
     }
};
   
export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange){
     let range = maxSpeed - minSpeed;
     if(range>requiredSpeedRange){
       return true;
     }
     else{
       return false;
     }
}

// export as
let availableAirplanes = [{
    name: 'AeroJet',
    maxSpeed: 1200,
    minSpeed: 300,
    fuelCapacity: 800,
    availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
   }, 
   {name: 'SkyJet',
    maxSpeed: 800,
    minSpeed: 200,
    fuelCapacity: 500,
    availableStaff: ['pilots', 'flightAttendants']
}];
   
let flightRequirements = {
     requiredStaff: 4,
     requiredSpeedRange: 700
};
   
function meetsStaffRequirements(availableStaff, requiredStaff) {
     if (availableStaff.length >= requiredStaff) {
       return true;
     } else {
       return false;
     }
};
   
function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange){
     let range = maxSpeed - minSpeed;
     if(range>requiredSpeedRange){
       return true;
     }
     else{
       return false;
     }
}
export {availableAirplanes as aircrafts, flightRequirements as flightReqs, meetsStaffRequirements as meetsStaffReqs, meetsSpeedRangeRequirements as meetsSpeedRangeReqs};

// combining export statements
export let availableAirplanes = [{
    name: 'AeroJet',
    maxSpeed: 1200,
    minSpeed: 300,
    fuelCapacity: 800,
    availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
   }, 
   {name: 'SkyJet',
    maxSpeed: 800,
    minSpeed: 200,
    fuelCapacity: 500,
    availableStaff: ['pilots', 'flightAttendants']
}];
   
export let flightRequirements = {
     requiredStaff: 4,
     requiredSpeedRange: 700
};
   
export function meetsStaffRequirements(availableStaff, requiredStaff) {
     if (availableStaff.length >= requiredStaff) {
       return true;
     } else {
       return false;
     }
};
   
function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange){
     let range = maxSpeed - minSpeed;
     if(range>requiredSpeedRange){
       return true;
     }
     else{
       return false;
     }
}
   
export {availableAirplanes as aircrafts, flightRequirements as flightReqs, meetsStaffRequirements as meetsStaffReqs, meetsSpeedRangeRequirements as meetsSpeedRangeReqs};
export default meetsSpeedRangeRequirements;
   
