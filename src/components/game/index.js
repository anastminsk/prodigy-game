class Game {
  constructor(battle, enemy, tasks) {
    this.battle = battle;
    this.enemy = enemy;
    this.tasksList = tasks;
    this.task = null;
    this.activeAttack = false;
    this.homeScreen = document.getElementById('home-screen');
    this.attackSelectionScreen = document.getElementById('attack-selection-screen');
    this.attackSelectionWindow = document.getElementById('attack-selection');
    this.taskSelectionWindow = document.getElementById('task-selection');
    this.attackButton = document.getElementById('attack-button');
    document.addEventListener('click', (e) => this.handleEvents(e));
  }

  init(hero) {
    this.level = 1;
    this.solvedTasks = 0;
    this.gameStatus = null;
    this.hero = hero;
    this.hero.createHealthBar('hero-health-bar');
    this.enemy.createHealthBar('enemy-health-bar');
    this.battle.init();
  }

  createEnemy() {
    this.enemy.level = this.level;
    this.enemy.generateName();
    this.enemy.generateAppearance();
  }

  setPersons() {
    this.createEnemy();
    this.battle.render(this.hero, this.enemy);
  }

  handleEvents(e) {
    if (e.target.id === 'attack-button' && !this.activeAttack) {
      this.attackSelectionScreen.classList.remove('hidden');
    }

    if (e.target.id === 'continue-game-button') {
      this.startNextLevel();
    }

    if (e.target.classList.contains('exit-menu-button')) {
      this.exitToMenu();
    }

    if (e.target.classList.contains('attack-item')) {
      this.selectAttackType(e);
    }

    if (e.target.classList.contains('task-item')) {
      this.selectTaskType(e);
    }

    if (e.target.id === 'check-answer-button') {
      this.checkAnswer();
    }
  }

  startNextLevel() {
    this.level++;
    this.setPersons();
    this.battle.gameResultWindow.classList.add('hidden');
    this.battle.winGameWindow.classList.add('hidden');
  }

  exitToMenu() {
    let resultWindow = `${this.gameStatus}GameWindow`;
    this.battle.gameResultWindow.classList.add('hidden');
    this.battle[resultWindow].classList.add('hidden');
    this.battle.battleScreen.classList.add('hidden');
    this.homeScreen.classList.remove('hidden');
    this.hero.health = 100;
  }

  selectAttackType(e) {
    this.attackType = e.target.id;
    this.attackSelectionWindow.classList.add('hidden');
    this.taskSelectionWindow.classList.remove('hidden');
  }

  selectTaskType(e) {
    this.attackSelectionScreen.classList.add('hidden');
    this.attackSelectionWindow.classList.remove('hidden');
    this.taskSelectionWindow.classList.add('hidden');
    this.task = this.tasksList[e.target.id];
    this.tasksList[e.target.id].init();
  }

  checkAnswer() {
    let result = this.task.checkResult();
    this.activeAttack = true;
    let delay = (ms) => {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
      });
    }

    if (result) {
      this.solvedTasks++;
      this.hero.attack(this.attackType);
      this.enemy.takeAttack(this.attackType);
      delay(500)
      .then(() => {
        this.task.correctAnswer();
        return delay(7000);
      })
      .then(() => {
        this.enemy.healthBar.render(this.enemy.health);
        this.activeAttack = false;
        this.setWinStatus();
      });
    } else {
      this.enemy.attack(this.attackType);
      this.hero.takeAttack(this.attackType);
      delay(500)
      .then(() => {
        this.task.wrongAnswer();
        return delay(7000);
      })
      .then(() => {
        this.hero.healthBar.render(this.hero.health);
        this.activeAttack = false;
        this.setLoseStatus();
      });
    }  
  }

  setWinStatus() {
    if (!this.enemy.health) {
      this.gameStatus = 'win';
      this.battle.showFinalGameWindow(this.gameStatus);
    }
  }

  setLoseStatus() {
    if (!this.hero.health) {
      this.gameStatus = 'lose';
      this.battle.showFinalGameWindow(this.gameStatus, this.level, this.solvedTasks);
    }
  }
}

export default Game;