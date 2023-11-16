let ladder = {
  step: 0,
  up: function () {
    this.step++;
    return this; // важно! 
  },
  down: function () {
    this.step--;
    return this;  // важно!
  },
  showStep: function () {
    alert(this.step);
    return this;    //важно!
  }
};


ladder.up().up().down().showStep(); // Возвращает 1
/*
============== с методом this  можно использовать 
метод цепочки (последовательного вызова)  ===============
*/