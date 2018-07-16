class Configuration {
  constructor(hero, appearance, game) {
    this.hero = hero;
    this.classList = appearance;
    this.game = game;
    this.heroCreationScreen = document.getElementById('hero-creation-screen');
    this.heroHeadContainer = document.getElementById('hero-head-container');
    this.heroBodyContainer = document.getElementById('hero-body-container');
    this.heroFigureContainer = document.getElementById('hero-figure-container');
    this.nameInput = document.getElementById('player-name-input');
    document.addEventListener('click', (e) => this.changeConfiguration(e));
  }

  init() {
    this.createHeadItems();
    this.createBodyItems();
    this.renderHeroFigure();
  }

  createHeadItems() {
    const headList = document.createElement('div');
    headList.classList.add('config-section');
    this.classList.heads.forEach((item, index) => {
      let head = document.createElement('div');
      head.classList.add('config-item-image', item);
      head.dataset.itemNum = index;
      head.dataset.itemType = 'head';
      headList.appendChild(head);
    });
    this.heroHeadContainer.appendChild(headList);
  }

  createBodyItems() {
    const bodyList = document.createElement('div');
    bodyList.classList.add('config-section');
    this.classList.bodies.forEach((item, index) => {
      let body = document.createElement('div');
      body.classList.add('config-item-image', item);
      body.dataset.itemNum = index;
      body.dataset.itemType = 'body';
      bodyList.appendChild(body);
    });
    this.heroBodyContainer.appendChild(bodyList);
  }

  renderHeroFigure() {
    this.heroFigureContainer.innerHTML = '';
    let figure = this.hero.createPerson();
    /*figure.classList.add('hero-figure');*/
    this.heroFigureContainer.appendChild(figure);
  }

  changeConfiguration(e) {
    let configType = e.target.dataset.itemType;

    if (e.target.id === 'submit-button') {
      if (this.nameInput.value) {
        this.hero.name = this.nameInput.value;
        this.heroCreationScreen.classList.add('hidden');
        this.game.init(this.hero);
        this.game.setPersons();
        this.nameInput.value = "";
      } 
    }

    switch (configType) {
      case 'head':  
        this.hero.headNum = e.target.dataset.itemNum;
        this.renderHeroFigure();
        break;
      case 'body': 
        this.hero.bodyNum = e.target.dataset.itemNum;
        this.renderHeroFigure();
        break;
    }
  }
}

export default Configuration;