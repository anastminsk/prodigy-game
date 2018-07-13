import Hero from '../hero';

class Enemy extends Hero {
  constructor(names) {
    super();
    this.namesList = names;
  }

  generateName() {
    let adjectiveIndex = Math.floor(Math.random() * this.namesList.adjective.length);
    let speciesIndex = Math.floor(Math.random() * this.namesList.species.length);
    let nameIndex = Math.floor(Math.random() * this.namesList.name.length);
    this.name = `${this.namesList.adjective[adjectiveIndex]} ${this.namesList.species[speciesIndex]} ${this.namesList.name[nameIndex]}`;
  }

  generateLook() {
    this.headNum = Math.floor(Math.random() * 3);
    this.bodyNum = Math.floor(Math.random() * 3);
  }
}

export default Enemy;