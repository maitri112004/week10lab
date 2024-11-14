// Step 1: Define the Carl class
class Carl {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }
  
    // Step 2: Implement the 'accelerate' method
    accelerate() {
      this.speed += 10;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }
  
    // Implement the 'brake' method
    brake() {
      this.speed -= 5;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }
  
    // Step 3: Add the getter for speed in mi/h
    get speedS() {
      return this.speed / 1.6;
    }
  
    // Step 4: Add the setter to set speed in mi/h
    set speedUS(speed) {
      this.speed = speed * 1.6;
    }
  }
  
  // Step 5: Create a new car and test the methods and getter/setter
  const car1 = new Carl('Ford', 120);
  
  car1.accelerate();   // Ford is going at 130 km/h
  car1.brake();        // Ford is going at 125 km/h
  
  console.log(`Speed in mi/h: ${car1.speedS}`); // Speed in mi/h: 78.125
  
  car1.speedUS = 50;   // Set speed in mi/h, which converts it to km/h
  console.log(car1);   // Ford now has a speed of 80 km/h
  