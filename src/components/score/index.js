class Score {
  constructor() {
    this.score = localStorage.getItem('game-results'); 
  }

  createItem(item, list) {
    const scoreItem = document.createElement('li');
    const itemBlock = document.createElement('div');
    const name = document.createElement('div');
    const scoreResult = document.createElement('div');
    itemBlock.classList.add('score-item');
    name.textContent = item.name;
    scoreResult.textContent = item.result;
    itemBlock.appendChild(name);
    itemBlock.appendChild(scoreResult);
    scoreItem.appendChild(itemBlock);
    list.appendChild(scoreItem);
  }

  show(container) {
    container.innerHTML = '';
    if (!this.score) {
      container.textContent = "Score is empty"
    } else {
      const scoreList = document.createElement('ol');
      const topScore = JSON.parse(localStorage.getItem('game-results'));
      topScore.forEach(item => this.createItem(item, scoreList));
      container.appendChild(scoreList);
    }
  }

  refresh(player) {
    if (!this.score) {
      localStorage.setItem('game-results') = JSON.stringify([player]);
    } else {
      let score = JSON.parse(localStorage.getItem('game-results'));
      score.push(player);
      score.sort((a, b) => b.result - a.result);
      score.length > 5 ? score.pop() : score;
      localStorage.setItem('game-results') = JSON.stringify(score);
    }
  }
}

export default Score;