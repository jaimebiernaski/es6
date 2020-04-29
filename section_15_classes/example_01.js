class Car {
  //initialization
  constructor({ title }) {
    this.title = title;
  }

  drive() {
    return 'Vroom';
  }
}

class Tesla extends Car {
  constructor(options) {
    super(options); //init the extended class : Car.contructor
    this.color = options.color;
  }
  honk() {
    return 'Beep';
  }
}

const car = new Car({ title: 'tesla' });
console.log(car.title, car.drive());

const tesla = new Tesla({ title: 'model3', color: 'red' });
console.log(tesla, tesla.honk(), tesla.drive());
