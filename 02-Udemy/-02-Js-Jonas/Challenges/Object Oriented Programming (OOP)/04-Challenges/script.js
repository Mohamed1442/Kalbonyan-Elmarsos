const EvCl = class extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(charge) {
    this.#charge = charge;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.charge -= 1;
    console.log(
      `${this.make} is going at ${this.speed}km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
};
const evv1 = new EvCl("BMW", 80, 33);
console.log(evv1.accelerate().accelerate().break());
