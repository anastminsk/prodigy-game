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
    /*this.head = document.createElement('div');
    this.body = document.createElement('div');
    this.head.classList.add('head', `head-${this.headNum}`);
    this.body.classList.add('body', `body-${this.bodyNum}`);*/
    person.classList.add('person', `head-${this.headNum}`, `body-${this.bodyNum}`);
    /*person.appendChild(this.head);
    person.appendChild(this.body);*/
    return person;
  }

  createHealthBar(className) {
    if (!this.healthBar) {
      this.healthBar = new Bar(className);
    }

    this.renderHealthBar();
  }

  renderHealthBar() {
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