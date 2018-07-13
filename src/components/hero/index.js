import Bar from '../bar';

class Hero {
  constructor() {
    this.headNum = 0;
    this.bodyNum = 0;
    this.health = 100;
    this.shotSound = document.getElementById('shot-sound');
    this.swordSound = document.getElementById('sword-sound');
  }

  createPerson() {
    let person = document.createElement('div');
    person.classList.add('person');
    person.classList.add(`head-${this.headNum}`);
    person.classList.add(`body-${this.bodyNum}`);
    return person;
  }

  createHealthBar(className) {
    if (!this.healthBar) {
      this.healthBar = new Bar(className);
    }
      
    this.healthBar.render(this.health);
  }

  attack(attackType) {
    if (attackType === 'attack-gun') {
      let person = this.createPerson();
      setTimeout(() => {
        this.shotSound.play();
        person.classList.add('bg-gun', 'person-attack-gun');
      }, 2000);
    } else if (attackType === 'attack-sword') {
      let person = this.createPerson();
      setTimeout(() => {
        this.swordSound.play();
        person.classList.add('bg-sword', 'person-attack-sword');
      }, 2000);
    }
  }

  takeAttack(attackType) {
    this.health = this.health - 25;
    let person = this.createPerson();
    setTimeout(() => {
      person.classList.add('bg-die', 'person-die');  
    }, 2000);
  }
}

export default Hero;