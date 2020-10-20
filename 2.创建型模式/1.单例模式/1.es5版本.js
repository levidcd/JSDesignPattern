// es5 版本
function ManageGame() {
  if (ManageGame._schedule) {
    return ManageGame._schedule;
  }
  ManageGame._schedule = this;
}

ManageGame.getInstance = function () {
  if (ManageGame._schedule) {
    return ManageGame._schedule;
  }
  return (ManageGame._schedule = new ManageGame());
};

const schedule1 = new ManageGame();
const schedule2 = ManageGame.getInstance();

console.log(schedule1 === schedule2);

