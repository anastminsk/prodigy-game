import Task from '../taskTemplate';
import { ANIMALS } from '../../../assets/data/animals.js';

class AnimalsTask extends Task {
  constructor() {
    super();
    this.animals = ANIMALS;
    this.taskWrapper = document.getElementById('animals-task');
    this.animalWrapper = document.getElementById('animal-wrapper');
    this.answer = document.getElementById('animal-answer');
  }

  showAnimalImage() {
    let animalImage = document.createElement('div');
    animalImage.classList.add(this.animal.className);
    this.animalWrapper.appendChild(animalImage);
  }

  init() {
    super.init();
    this.taskWrapper.classList.remove('hidden');
    this.answer.value = '';
    this.animalWrapper.innerHTML = '';
    this.shuffleArray(this.animals);
    let index = Math.floor(Math.random() * this.animals.length);
    this.animal = this.animals[index];
    this.showAnimalImage();
  }

  checkResult() {
    let answer = this.answer.value.toLowerCase();
    if (this.animal.name.indexOf(answer) !== -1) {
      return true;
    }

    return false;
  }
}

export default AnimalsTask;