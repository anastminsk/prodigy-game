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

  delay(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms);
    });
  }    

  attack(attackType) {
    if (attackType === 'attack-gun') {
      this.delay(1000)
      .then(() => {
        this.figureContainer.classList.remove('bg-gun', 'person-attack-gun', 'bg-sword', 'person-attack-sword', 'bg-die', 'person-die');
        return this.delay(2000);
      })
      .then(() => {
        this.shotSound.play();
        this.figureContainer.classList.add('bg-gun', 'person-attack-gun');
      });
    } else if (attackType === 'attack-sword') {
      this.delay(1000)
      .then(() => {
        this.figureContainer.classList.remove('bg-gun', 'person-attack-gun', 'bg-sword', 'person-attack-sword', 'bg-die', 'person-die');
        return this.delay(2000);
      })
      .then(() => {
        this.swordSound.play();
        this.figureContainer.classList.add('bg-sword', 'person-attack-sword');
      });
    }   
  }

  takeAttack(attackType) {
    this.health = this.health - 25;
    this.delay(2000)
    .then(() => {
      this.figureContainer.classList.remove('bg-gun', 'person-attack-gun', 'bg-sword', 'person-attack-sword', 'bg-die', 'person-die');
      return this.delay(3000);
    })
    .then(() => {
      this.figureContainer.classList.add('bg-die', 'person-die');
    });
  }
}

export default Hero;