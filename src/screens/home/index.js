class Loading {
  constructor() {
    this.homeScreen = document.getElementById('home-screen');
    this.navigation = document.getElementById('navigation');
    this.scoreSection = document.getElementById('score-section');
    this.scoreContainer = document.getElementById('score-container');
    this.startButton = document.getElementById('start');
    this.scoreButton = document.getElementById('score');
    this.closeButton = document.getElementById('close-button');
    this.startButton.addEventListener('click', () => this.startGame());
    this.scoreButton.addEventListener('click', () => this.showScore());
    this.closeButton.addEventListener('click', () => this.handleScreen());
  }

  init(score) {
    this.score = score;
  }

  startGame() {
    this.heroCreationScreen = document.getElementById('hero-creation-screen');
    this.heroCreationScreen.classList.remove('hidden');
    this.homeScreen.classList.add('hidden');
  }

  showScore() {
    this.score.show(this.scoreContainer);
    this.scoreSection.classList.remove('hidden');
    this.navigation.classList.add('hidden');
  }

  handleScreen() {
    this.scoreSection.classList.add('hidden');
    this.navigation.classList.remove('hidden');
  }
}

export default Loading;