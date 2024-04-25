const cloneMethod = Symbol('clone');

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [cloneMethod]() {
    const Constructor = this.constructor; // Get the constructor function of the current instance
    const { _brand, _motor, _color } = this;
    return new Constructor(_brand, _motor, _color); // Create a new instance using the constructor function
  }

  cloneCar() {
    return this[cloneMethod]();
  }
}

export default Car;
