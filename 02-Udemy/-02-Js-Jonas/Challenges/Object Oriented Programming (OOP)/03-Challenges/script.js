const Ev = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
Ev.prototype = Object.create(Car.prototype);

Ev.prototype.chargeBattery = function (charge) {
  this.charge = charge;
};

Ev.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} is going at ${this.speed}km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new Ev("Tesla", 120, 23);
tesla.chargeBattery(30);
tesla.accelerate();
