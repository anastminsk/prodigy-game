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
    } else if (e.target.id === 'next-game-button') {
        this.startNextLevel();
    } else if (e.target.id === 'exit-to-menu-button') {
        this.exitToMenu();
    } else if (e.target.classList.contains('attack-item')) {
        this.selectAttackType(e)
    } else if (e.target.classList.contains('task-item')) {
        this.selectTaskType(e)
    } else if (e.target.id === 'check-answer-button') {
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
    this.battle.gameResultPage.classList.add('hidden');
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
    if (result) {
      this.solvedTasks++;
      this.hero.attack(this.attackType);
      this.enemy.takeAttack(this.attackType);
      setTimeout(() => {
        this.task.correctAnswer();
      }, 500);
      setTimeout(() => {
        this.enemy.healthBar.render(this.enemy.health);
        this.activeAttack = false;
        this.setWinStatus();
      }, 5000);
    } else {
      this.enemy.attack(this.attackType);
      this.hero.takeAttack(this.attackType);
      setTimeout(() => {
        this.task.wrongAnswer();
      }, 500);
      setTimeout(() => {
        this.hero.healthBar.render(this.hero.health);
        this.activeAttack = false;
        this.setLoseStatus();
      }, 5000);
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