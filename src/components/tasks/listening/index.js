import Task from '../taskTemplate';

class ListeningTask extends Task {
  constructor() {
    super();
    this.synth = window.speechSynthesis;
    this.taskWrapper = document.getElementById('listening-task');
    this.playButton = document.querySelector('img');
    this.answer = document.getElementById('listening-answer');
    this.playButton.addEventListener('click', () => this.speakWord());
  }

  init() {
    super.init();
    this.answer.value = '';
    let index = Math.floor(Math.random() * this.vocabulary.length);
    this.word = this.vocabulary[index].word;
  }

  speakWord() {
    this.speech = new SpeechSynthesisUtterance(this.word);
    this.synth.speak(this.speech);
  }

  checkResult() {
    let answer = this.answer.value.toLowerCase();
    if (answer === this.word) {
      return true;
    }

    return false;
  }
}

export default ListeningTask;