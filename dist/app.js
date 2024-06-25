"use strict";
class Vehicle {
    constructor(make, model, wheels) {
        //Add appropriate types for all current Vehicle properties and method parameters.
        this.status = "stopped";
        this.make = make;
        this.model = model;
        this.wheels = wheels;
    }
    start() {
        this.status = "started";
    }
    stop() {
        this.status = "stopped";
    }
}
//Adjust the Car according to any TypeScript errors.
class Car extends Vehicle {
    constructor(make, model) {
        super(make, model, 4);
    }
}
//Fixed the MotorCycle classes as needed according to any TypeScript errors.
class MotorCycle extends Vehicle {
    constructor(make, model) {
        super(make, model, 2);
    }
}
//Change the printStatus function to accept a parameter of type Vehicle.
//Add void becuase function does not return a value
function printStatus(vehicle) {
    if (vehicle.status === "started") {
        console.log("The vehicle is running.");
    }
    else {
        console.log("The vehicle is stopped.");
    }
}
//Case sentitive: toUppercase !== toUpperCase
const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUpperCase());
//Fix mistype of the word model
const myBuick = new Car("Buick", "Regal");
myBuick.wheels = myBuick.wheels - 1;
console.log(myBuick.wheels);
console.log(myBuick.model);
//PART TWO: Creating a generic class
// @ts-check
class NCycle {
    //Adjust the constructor parameters to have either the generic type or an array of the generic type.
    constructor(make, model, wheels) {
        //Add appropriate types for all current Vehicle properties and method parameters.
        this.status = "stopped";
        this.make = make;
        this.model = model;
        this.wheels = wheels;
    }
    start() {
        this.status = "started";
    }
    stop() {
        this.status = "stopped";
    }
    //Method print that returns nothing and has a single number parameter 
    print(x = 0) {
        if (!Array.isArray(this.make) && !Array.isArray(this.model)) {
            console.log(`This is a ${this.make} ${this.model} NCycle.`);
        }
        else if (Array.isArray(this.make) && Array.isArray(this.model)) {
            console.log(`This NCycle has a ${this.make} ${this.model} NCycle.`);
        }
        else {
            "This NCycle was not created properly.";
        }
    }
    printAll() {
        if (Array.isArray(this.make) && Array.isArray(this.model)) {
            console.log(`This NCycle has a ${this.make} ${this.model} NCycle.`);
        }
        else {
            this.print();
        }
    }
}
//PART 4: Testing
const testCycle1 = new NCycle(1, 2, 3);
testCycle1.print();
testCycle1.printAll();
const testCycle2 = new NCycle("This", "That", 4);
testCycle2.print();
testCycle2.printAll();
const testCycle3 = new NCycle("Make", "Model", 4);
testCycle3.print(4);
testCycle3.printAll();
const makes4 = ["Volkswagon", "Tesla", "Audi"];
const models4 = ["Passat", "Model X", "A4"];
const testCycle4 = new NCycle(makes4, models4, 4);
testCycle4.print(2);
testCycle4.printAll();
const makes5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const models5 = [1, 1, 2, 3, 5];
const testCycle5 = new NCycle(makes5, models5, 0);
testCycle5.print(7);
testCycle5.printAll();
function add(x, y) {
    return x + y;
}
