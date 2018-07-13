class Bar {
  constructor(className) {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.classList.add('bar');
    this.container = document.getElementById('health-bar');
    this.container.appendChild(this.canvas);
  }

  render(health = 100) {
    this.canvas.width = 400;
    this.ctx.fillStyle = "lightblue";
    this.ctx.fillRect(0, 0, this.canvas.width * health / 100, this.canvas.height);
  }
}

export default Bar; 