import Task from '../taskTemplate';

class SimpleMathTask extends Task {
  constructor() {
    super();
    this.result = document.getElementById('math-result');
    this.operations = ['+', '-', '*', '/'];
    this.taskWrapper = document.getElementById('mathematics-task');
    this.firstNumber = document.getElementById('first-number');
    this.operator = document.getElementById('operation');
    this.secondNumber = document.getElementById('second-number');
  }

  generateOperands(operation) {
    switch (operation) {
      case '+':
        this.firstOperand = Math.floor(Math.random() * 100);
        this.secondOperand = Math.floor(Math.random() * 100);
        this.answer = this.firstOperand + this.secondOperand;
        break;
      case '-':
        this.secondOperand = Math.floor(Math.random() * 100);
        this.firstOperand = Math.floor(Math.random() * 100) + this.secondOperand
        this.answer = this.firstOperand - this.secondOperand;
        break;
      case '*':
        this.firstOperand = Math.floor(Math.random() * 100) + 1;
        this.secondOperand = Math.floor(Math.random() * 10) + 1;
        this.answer = this.firstOperand * this.secondOperand;
        break;
      case '/':
        this.secondOperand = Math.floor(Math.random() * 10) + 1;
        this.firstOperand = this.secondOperand * (Math.floor(Math.random() * 10) + 1);
        this.answer = this.firstOperand / this.secondOperand;
        break;
    }
    this.firstNumber.innerHTML = this.firstOperand;
    this.operator.innerHTML = operation;
    this.secondNumber.innerHTML = this.secondOperand;
  }

  generateExpression() {
    let index = Math.floor(Math.random() * this.operations.length);
    this.generateOperands(this.operations[index]);
  }

  init() {
    super.init();
    this.taskWrapper.classList.remove('hidden');
    this.result.value = '';
    this.generateExpression();
  }

  checkResult() {
    if (Number(this.result.value) === this.answer) {
      return true;
    }

    return false;
  }
}

export const simpleMathTask = new SimpleMathTask();