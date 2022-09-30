const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.break = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const car1 = new Car("BMW", 80);
const car2 = new Car("fiat", 120);
