/**
 * Now that you have a monster created, create a subclass of the Monster called Snake.
 * - The Snake should have a 'bite' method. The only argument to this method is another instance of a Snake.
 * - The instance of Snake that is passed in should have their health deducated by 10
 */

class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake extends Monster {
  constructor(options) {
    super(options);
  }
  bite(snake) {
    return (snake.health -= 10);
  }
}

var s1 = new Snake({ name: 'Cobra 1' });
var s2 = new Snake({ name: 'Cobra 2' });
console.log('Snake1=', s1);
console.log('Snake2=', s2);
s1.bite(s2);
console.log('Snake2 bited by Snake1=', s2);
