// class 改造
class ManageGame {
  static _schedule = null;

  static getInstance() {
    if (ManageGame._schedule) {
      return ManageGame._schedule;
    }
    return (ManageGame._schedule = new ManageGame());
  }

  constructor() {
    if (ManageGame._schedule) {
      return ManageGame._schedule;
    }
    ManageGame._schedule = this;
  }
}

const schedule1 = new ManageGame();
const schedule2 = ManageGame.getInstance();
console.log(ManageGame);
console.log(schedule1 === schedule2);
