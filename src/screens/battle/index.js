class Battle {
  constructor(score) {
    this.score = score;
    this.battleScreen = document.getElementById('battle-screen');
    this.heroName = document.getElementById('hero-name');
    this.enemyName = document.getElementById('enemy-name');
    this.level = document.getElementById('game-level');
    this.gameResultWindow = document.getElementById('game-result-window'); 
    this.winGameWindow = document.getElementById('win-game-window');
    this.loseGameWindow = document.getElementById('lose-game-window'); 
    this.numberOfTasks = document.getElementById('number-of-tasks');
    this.numberOfEnemies = document.getElementById('number-of-enemies');
  }

  init() {
    this.battleScreen.className = 'battle-screen';
  }

  createHero(hero) {
    this.hero = hero;
    this.heroPerson = this.hero.createPerson();
    this.heroPerson.classList.add('hero-container');
    this.heroName.textContent = this.hero.name;
    this.battleScreen.appendChild(this.heroPerson);
    this.hero.renderHealthBar();
  }

  createEnemy(enemy) {
    this.enemy = enemy;
    this.enemy.health = 100;
    this.enemyPerson = this.enemy.createPerson();
    this.enemyPerson.classList.add('enemy-container');
    this.enemyName.textContent = this.enemy.name;
    this.level.textContent = this.enemy.level;
    this.battleScreen.appendChild(this.enemyPerson);
    this.enemy.renderHealthBar();
  }

  render(hero, enemy) {
    if (this.enemyPerson) {
      this.battleScreen.removeChild(this.heroPerson);
      this.battleScreen.removeChild(this.enemyPerson);
    }

    this.createHero(hero);
    this.createEnemy(enemy);
  }

  setGameResults(level, tasksAmount) {
    this.numberOfTasks.textContent = tasksAmount;
    this.numberOfEnemies.textContent = level - 1;
    this.score.refresh({name: this.hero.name, result: tasksAmount});
  }

  showFinalGameWindow(result, level, tasksAmount) {
    setTimeout(() => {    
      if (level) {
        this.setGameResults(level, tasksAmount);
      }
      this.gameResultWindow.classList.remove('hidden');
      this[`${result}GameWindow`].classList.remove('hidden');
    }, 1000);
  }
}

export default Battle;