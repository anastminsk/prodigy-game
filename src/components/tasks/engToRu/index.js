import Task from '../taskTemplate';

class EngToRuTask extends Task {
  constructor() {
    super();
    this.taskWrapper = document.getElementById('translation-task');
    this.wordContainer = document.getElementById('word-for-translation');
    this.answer = document.getElementById('translation-input');
  }

  init() {
    super.init();
    this.taskWrapper.classList.remove('hidden');
    this.answer.value = '';
    let index = Math.floor(Math.random() * this.vocabulary.length);
    this.word = this.vocabulary[index].word;
    this.translations = this.vocabulary[index].translation;
    this.wordContainer.innerHTML = this.word.toUpperCase();
  }

  checkResult() {
    this.answer = this.answer.value.toLowerCase();
    if (this.translations.indexOf(this.answer) !== -1) {
      return true;
    } 

    return false;
  }
}

export default EngToRuTask;