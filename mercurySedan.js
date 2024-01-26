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
        console.log(`${num} passenger(s) have entered the vehicle.`);
        return this.passenger;
      } else {
        console.log(`${this.model} ${this.make} can only fit five passengers.`);
      }
    } else {
      console.log(`${this.model} ${this.make} is already full.`);
    }
  }

  start() {
    if (this.fuel > 0) {
      console.log("Vehicle has started!");
      return (this.started = true);
    } else {
      console.log("You are out of fuel!");
      return (this.started = false);
    }
  }

  serviceNeeded() {
    if (this.mileage > 30000) {
      this.scheduleService = true;
      console.log(
        "You need to bring your vehicle in for service before it blows up!"
      );
      return this.scheduleService;
    } else {
      console.log("Your vehicle is still in good condition.");
    }
  }
}

let myCar = new Sedan("Merucry", "A28", "2024", "dark-green", 150);
myCar.start();
myCar.loadPassenger(5);
myCar.loadPassenger(1);
myCar.stop();
myCar.serviceNeeded();
console.log(myCar);
