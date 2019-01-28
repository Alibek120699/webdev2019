// introduction
class Dog{
    constructor(name){
        this._name = name;
        this._behavior = 0;
    }
    get name(){
        return this._name;
    }
    get behavior(){
        return this._behavior;
    }
    incrementBehavior(){
        this._behavior++;
    }
}
const halley = new Dog('Halley');
console.log(halley.name); // output: Halley
console.log(halley.behavior); // output: 0
halley.incrementBehavior();
console.log(halley.behavior); // output: 1

// constructor
class Surgeon{
    constructor(name, department){
        this._name = name;
        this._department = department;
    }
}

// instance
const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

// methods
class Surgeon{
    constructor(name, department){
        this._name = name;
        this._department = department;
        this._remainingVacationDays = 20;
    }

    get name(){
        return this._name;
    }

    get department(){
        return this._department;
    }

    get remainingVacationDays(){
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff){
        this._remainingVacationDays -= daysOff;
    }
}

// method calls
console.log(surgeonCurry.name); // output: Curry
surgeonCurry.takeVacationDays(3);
console.log(surgeonCurry.remainingVacationDays); // output: 17

// inheritance 1, 2. how would be written classes with common properties without inheritance:
class Doctor{
    constructor(name, insurance){
      this._name = name;
      this._remainingVacationDays = 20;
      this._insurance = insurance;
    }
    takeVacationDays(){
      
    }
}
  
class Nurse{
    constructor(name, certifications){
      this._name = name;
      this._remainingVacationDays = 20;
      this._certifications = certifications;
    }
    takeVacationDays(){
      
    }
    addCertification(){
      
    }
}
class HospitalEmployee{
    constructor(name){
      this._name = name;
      this._remainingVacationDays = 20;
    }
    
    get name(){
      return this._name;
    }
    
    get remainingVacationDays(){
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff){
      this._remainingVacationDays -= daysOff;
    }
}

// inheritance 3
class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
}
  
class Nurse extends HospitalEmployee{
    constructor(name, certifications){
      super(name);
      this._remainingVacationDays = 20;
      this._certifications = certifications;
    }

    get certifications(){
        return this._certifications;
    }
    
    takeVacationDays(){
      
    }
    
    addCertification(newCertification){
      this._certifications.push(newCertification);
    }
}
const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);

// inheritance 4
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays); // output: 15
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications); // output: [ 'Trauma', 'Pediatrics', 'Genetics' ]

// static method example:
class SimpleClass{
    constructor(){}
    static generatePassword(){
        return Math.floor(Math.random()*10000);
    }
}

