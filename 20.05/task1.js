function AutoSaloon(amountOfSpace, name) {
  const garage = [];

  this.addCar = function (car) {
    if (garage.length < amountOfSpace) {
      const isAdded = car.addToSaloon(name);
      if (isAdded) {
        garage.push(car);
      }
    } else {
      console.log("The autosaloon is full. Create new autosaloon");
    }
  };

  this.deleteCar = function (carId) {
    const indexOfCar = garage.findIndex((x) => x.carId === carId);
    if (indexOfCar === -1) {
      console.log("There is no car with that ID");
    } else {
      garage[indexOfCar].removeFromSaloon();
      garage.splice(indexOfCar, 1);
    }
  };

  this.getInfo = function () {
    return `'${name}', max cars amount: ${amountOfSpace}, busy space: ${garage.length}`;
  };
}

function Car(mark, id) {
  this.mark = mark;
  this.carId = id;
  this.nameOfSaloon = "";

  this.addToSaloon = function (name) {
    if (this.nameOfSaloon) {
      console.log("This car is already in a saloon");
      return false;
    } else {
      this.nameOfSaloon = name;
      return true;
    }
  };

  this.removeFromSaloon = function () {
    this.nameOfSaloon = "";
  };

  this.getInfo = function () {
    if (!this.nameOfSaloon) {
      return "The car is not in a saloon";
    } else {
      return `Car ${this.mark}, car ID ${this.carId}, in ${this.nameOfSaloon} saloon`;
    }
  };
}

const bmwSaloon = new AutoSaloon(3, "BMW");

console.log(bmwSaloon.getInfo());

const bmwCar = new Car("BMW", "AA3133KC");

console.log(bmwCar.getInfo());

bmwSaloon.addCar(bmwCar);

console.log(bmwCar.getInfo());
console.log(bmwSaloon.getInfo());

//bmwSaloon.deleteCar("AA3133KC");

//console.log(bmwCar.getInfo());
//console.log(bmwSaloon.getInfo());

const audiCar = new Car('AUDI', "AB3747DC");

bmwSaloon.addCar(audiCar);

console.log(bmwSaloon.getInfo());

const mersedesCar = new Car('MERSEDES', 'VC4756GH')

bmwSaloon.addCar(mersedesCar);

console.log(bmwSaloon.getInfo())

const bentleyCar = new Car('BENTLEY', 'JD5876KG')

bmwSaloon.addCar(bentleyCar);

console.log(bmwSaloon.getInfo())