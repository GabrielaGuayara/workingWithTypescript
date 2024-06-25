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
  
  const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
  myHarley.start();
  printStatus(myHarley);
  console.log(myHarley.make.toUppercase());
  
  const myBuick = new Car("Buick", "Regal");
  myBuick.wheels = myBuick.wheels - 1;
  console.log(myBuick.wheels);
  console.log(myBuick.mdl);
  