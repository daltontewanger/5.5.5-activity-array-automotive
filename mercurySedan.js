//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass");

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "A28", "2024", "color", "mileage");
console.log(v.make);

//After you write the derived Car class, you should test it out.
class Sedan extends VehicleModule.Vehicle {
  constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
    this.maxPassengers = 5;
    this.passenger = 0;
    this.numberOfWheels = 4;
    this.maxSpeed = 160;
    this.fuel = 10;
    this.scheduleService = false;
  }

  loadPassenger(num) {
    if (this.passenger < this.maxPassengers) {
      if (num + this.passenger <= this.maxPassengers) {
        this.passenger = num;
        return this.passenger;
      } else {
        console.log(
          `${this.model} ${this.make} can only fit five passengers.`
        );
      }
    } else {
      console.log(`${this.model} ${this.make} is already full.`);
    }
  }
}

let myCar = new Sedan("Merucry", "A28", "2024", "dark-green", 150);
myCar.loadPassenger(5)
myCar.loadPassenger(1)
console.log(myCar);
//Note: You can code your derived Car class here or make a file named index.js and do it there.

//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.

//Create at least two new instances of the Car class and test them here:
