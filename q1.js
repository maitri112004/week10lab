// Step 1: Define the Car constructor function
class Car {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }
  
    // Step 2: Implement the 'accelerate' method
    accelerate() {
      this.speed += 10;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }
  
    // Step 3: Implement the 'brake' method
    brake() {
      this.speed -= 5;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }
  }
  
  // Step 4: Create two Car objects and test them
  const car1 = new Car('BMW', 120);
  const car2 = new Car('Mercedes', 95);
  
  car1.accelerate(); // BMW is going at 130 km/h
  car1.accelerate(); // BMW is going at 140 km/h
  car1.brake();      // BMW is going at 135 km/h
  car1.brake();      // BMW is going at 130 km/h
  
  car2.accelerate(); // Mercedes is going at 105 km/h
  car2.accelerate(); // Mercedes is going at 115 km/h
  car2.brake();      // Mercedes is going at 110 km/h
  car2.brake();      // Mercedes is going at 105 km/h
  