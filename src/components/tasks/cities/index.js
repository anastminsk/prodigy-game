import Task from '../taskTemplate';
import { CITIES } from '../../../assets/data/cities.js';

class CitiesTask extends Task {
  constructor() {
    super();
    this.cities = CITIES;
    this.taskWrapper = document.getElementById('cities-task');
    this.cityWrapper = document.getElementById('city-wrapper');
    this.answer = document.getElementById('city-answer');
  }

  showCityImage() {
    let cityImage = document.createElement('div');
    cityImage.classList.add(this.city.className);
    this.cityWrapper.appendChild(cityImage);
  }

  init() {
    super.init();
    this.taskWrapper.classList.remove('hidden');
    this.answer.value = '';
    this.cityWrapper.innerHTML = '';
    this.shuffleArray(this.cities);
    let index = Math.floor(Math.random() * this.cities.length);
    this.city = this.cities[index];
    this.showCityImage();
  }

  checkResult() {
    let answer = this.answer.value.toLowerCase();
    if (this.city.name.indexOf(answer) !== -1) {
      return true;
    }

    return false;
  }
}

export default CitiesTask;