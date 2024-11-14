// Parent class Car
class Car {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }
  
    // Method to accelerate (increases speed by 10)
    accelerate() {
      this.speed += 10;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }
  
    // Method to brake (decreases speed by 5)
    brake() {
      this.speed -= 5;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }
  }
  
  // Child class EV
  class EV extends Car {
    constructor(make, speed, charge) {
      // Call the parent constructor for make and speed
      super(make, speed);
      this.charge = charge;
    }
  
    // Method to charge the battery
    chargeBattery(chargeTo) {
      this.charge = chargeTo;
      console.log(`${this.make} is charged to ${this.charge}%`);
    }
  
    // Override the accelerate method
    accelerate() {
      this.speed += 20;
      this.charge -= 1;
      console.log(
        `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`
      );
    }
  }
  
  // Create an electric car object
  const ev1 = new EV('Tesla', 120, 20);
  
  // Test the methods
  ev1.accelerate(); // Tesla is going at 140 km/h, with a charge of 19%
  ev1.brake();      // Tesla is going at 135 km/h
  ev1.chargeBattery(90); // Tesla is charged to 90%
  ev1.accelerate(); // Tesla is going at 155 km/h, with a charge of 89%
  