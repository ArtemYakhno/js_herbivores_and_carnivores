'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore.hidden === true || herbivore instanceof Carnivore) {
      return;
    }
    herbivore.health -= 50;

    if (herbivore.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== herbivore);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
