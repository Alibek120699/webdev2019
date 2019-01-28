// the this keyword
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo(){
        return `I am ${this.model} and my current energy level is ${this.energyLevel}`;
    }
};
console.log(robot.provideInfo());

// arrow functions and this
const robot = {
    energyLevel: 100,
    checkEnergy() {
        console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
}
robot.checkEnergy(); // output: Energy is currently at 100%.

// privacy
const robot = {
    _energyLevel = 100,
    recharge(){
        this._energyLevel += 30;
        console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`);
    }
};
robot._energyLevel = 'high';
robot.recharge(); // output: Recharged! Energy is currently at high30%.

// getters
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel(){
        if(typeof this._energyLevel === 'number'){
            return `My current energy level is ${this._energyLevel}`;
        }else{
            return 'System malfunction: cannot retrieve energy level';
        }
    }
};
console.log(robot.energyLevel); // output: My current energy level is 100

// setters
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
        if(typeof this._numOfSensors === 'number'){
            return this._numOfSensors;
        } else {
            return 'Sensors are currently down.'
        }
    },
    set numOfSensors(num){
        if(typeof num === 'number' && num>=0){
            this._numOfSensors = num;
        }
        else{
            console.log('Pass in a number that is greater than or equal to 0');
        }
    }
};
robot.numOfSensors = 100;
console.log(robot.numOfSensors); // output: 100

// factory functions
const robotFactory = (model, mobile) => {
    return {
        model: model,
        mobile: mobile,
        beep: ()=>{
            console.log('Beep Boop');
        }
    }
};
const tinCan = robotFactory('P-500', true);
tinCan.beep(); // output: Beep Boop

// property value shorthand
const robotFactory = (model, mobile) => {
    return{
        model,
        mobile,
        beep: () => {
            console.log('Beep Boop');
        }
    }
};
const newRobot = robotFactory('P-501', false);
console.log(newRobot.model); // output: P-501
console.log(newRobot.mobile); // output: false

// destructured assignment
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
        beep() {
            console.log('Beep Boop');
        },
        fireLaser() {
            console.log('Pew Pew');
        },
    }
};
const { functionality } = robot;
const {beep} = functionality;
functionality.beep();

// built-in object methods
const robot = {
	model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
};
const robotKeys = Object.keys(robot);
console.log(robotKeys);
// Declare robotEntries below this line:
const robotEntries = Object.entries(robot);
console.log(robotEntries);
// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);
console.log(newRobot.laserBlaster, newRobot.voiceRecognition);
