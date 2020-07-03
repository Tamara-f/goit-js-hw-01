class Car {
  static getSpecs(car) {
    console.log(`this car: maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn},
      distance: ${car.distance}, price: ${car.price}`);
  }

  constructor({ maxSpeed, price }) {
    this.speed = 0;
    this.price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }

  get getPrice() {
    return this.price;
  }

  set setPrice(price) {
    this.price = price;
  }
  //get price() {
  //   return this._price;
  // }

  // set price(value) {
  //   this._price = value;
  //   return this._price;
  // }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      this.speed += value;
      return this.speed;
    }
  }

  decelerate(value) {
    if (this.speed - value > 0) {
      this.speed -= value;
      return this.speed;
    }
  }

  drive(hours) {
    if ((this.isOn = true)) {
      this.hours = Number(hours);
      this.distance = this.distance + this.hours * this.speed;
    }
  }
}
const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
