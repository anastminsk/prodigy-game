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
    this.figureContainer = document.createElement('div');
    this.figureContainer.classList.add('person', `head-${this.headNum}`, `body-${this.bodyNum}`);
    person.appendChild(this.figureContainer);
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
      setTimeout(() => {
        this.figureContainer.classList.remove('bg-gun', 'person-attack-gun', 'bg-sword', 'person-attack-sword', 'bg-die', 'person-die');
      }, 1000);
      setTimeout(() => {
        this.shotSound.play();
        this.figureContainer.classList.add('bg-gun', 'person-attack-gun');
      }, 2000);
    } else if (attackType === 'attack-sword') {
      setTimeout(() => {
        this.figureContainer.classList.remove('bg-gun', 'person-attack-gun', 'bg-sword', 'person-attack-sword', 'bg-die', 'person-die');
      }, 1000);
      setTimeout(() => {
        this.swordSound.play();
        this.figureContainer.classList.add('bg-sword', 'person-attack-sword');
      }, 2000);
    }
  }

  takeAttack(attackType) {
    this.health = this.health - 25;
    setTimeout(() => {
      this.figureContainer.classList.remove('bg-gun', 'person-attack-gun', 'bg-sword', 'person-attack-sword', 'bg-die', 'person-die');
    }, 2000);
    setTimeout(() => {
      this.figureContainer.classList.add('bg-die', 'person-die');
    }, 3000);
  }
}

export default Hero;