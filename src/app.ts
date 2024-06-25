// @ts-check

class Vehicle {
    //Add appropriate types for all current Vehicle properties and method parameters.
    status: "started" | "stopped" = "stopped";
    make: string;
    model: string;
    wheels:number;

  
    constructor(make: string, model: string, wheels:number) {
      this.make = make;
      this.model = model;
      this.wheels = wheels;
    }
    start(): void {
      this.status = "started";
    }
    stop(): void {
      this.status = "stopped";
    }
  }
  
//Adjust the Car according to any TypeScript errors.
  class Car extends Vehicle {
    constructor(make:string, model:string) {
      super(make, model, 4);
    }
  }
  
//Fixed the MotorCycle classes as needed according to any TypeScript errors.
  class MotorCycle extends Vehicle {
    constructor(make:string, model:string) {
      super(make, model, 2);
    }
  }
  
//Change the printStatus function to accept a parameter of type Vehicle.
//Add void becuase function does not return a value
  function printStatus(vehicle: Vehicle): void {
    if (vehicle.status === "started") {
      console.log("The vehicle is running.");
    } else {
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

class NCycle <T>{
  //Add appropriate types for all current Vehicle properties and method parameters.
  status: "started" | "stopped" = "stopped";
 // Allow make and model to have either the generic type or an array of the generic type.
  make: T | T[];
  model: string;
  wheels:number;


  constructor(make:  T | T[], model: T | T[], wheels:number) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }
  start(): void {
    this.status = "started";
  }
  stop(): void {
    this.status = "stopped";
  }
}

//Adjust the Car according to any TypeScript errors.
class Car extends Vehicle {
  constructor(make:string, model:string) {
    super(make, model, 4);
  }
}

//Fixed the MotorCycle classes as needed according to any TypeScript errors.
class MotorCycle extends Vehicle {
  constructor(make:string, model:string) {
    super(make, model, 2);
  }
}

//Change the printStatus function to accept a parameter of type Vehicle.
//Add void becuase function does not return a value
function printStatus(vehicle: Vehicle): void {
  if (vehicle.status === "started") {
    console.log("The vehicle is running.");
  } else {
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