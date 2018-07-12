import { VOCABULARY } from '../../../assets/data/vocabulary.js';

class Task {
  constructor() {
    this.vocabulary = VOCABULARY;
    this.taskScreen = document.getElementById('task-screen');
    this.correctAnswerArea = document.getElementById('correct-answer');
    this.wrongAnswerArea = document.getElementById('wrong-answer');
    this.correctAnswerSound = document.getElementById('correct-answer-sound');
    this.wrongAnswerSound = document.getElementById('wrong-answer-sound');
  }

  init() {
    this.taskScreen.classList.remove('hidden');
  }
  
  shuffleArray(array) {
    let i = array.length, randInd, temp;
    while (i > 0) {
      randInd = Math.floor(Math.random() * i);
      temp = array[randInd];
      array[randInd] = array[i - 1];
      array[i - 1] = temp;
      i--;
    }
  }

  correctAnswer() {
    this.taskScreen.classList.add('hidden');
    this.correctAnswerArea.classList.remove('hidden');
    this.correctAnswerSound.play();
    setTimeout(() => {
        this.correctAnswerArea.classList.add('hidden');
    }, 1000);
  }

  wrongAnswer() {
    this.taskScreen.classList.add('hidden');
    this.wrongAnswerArea.classList.remove('hidden');
    this.wrongAnswerSound.play();
    setTimeout(() => {
        this.wrongAnswerField.classList.add('hidden');
    }, 1000);
  }
}

export default Task;