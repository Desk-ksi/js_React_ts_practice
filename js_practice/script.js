let count = 0

const display = document.getElementById("display");
const downButton = document.getElementById("down");
const upButton = document.getElementById("up");
const resetButton = document.getElementById("reset");

downButton.addEventListener("click", () => {
  count--;
  display.textContent = count;
});

upButton.addEventListener("click", () => {
  count++;
  display.textContent = count;
});

resetButton.addEventListener("click", () => {
  count = 0;
  display.textContent = count;
});
