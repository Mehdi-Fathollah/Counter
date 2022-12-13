const increaseBtn = document.querySelector(".increase");
const decreaseBtn = document.querySelector(".decrease");
const counterField = document.querySelector(".counter");
// Counter
let counter = 0;

// Increase
increaseBtn.addEventListener("click", () => {
  counterField.innerText = ++counter;
});

// Decrease
decreaseBtn.addEventListener("click", () => {
  counterField.innerText = --counter;
  if (counter <= 0) {
    counterField.innerText = counter = 0;
  }
});

// Reset
increaseBtn.nextElementSibling.addEventListener("click", () => {
  counterField.innerHTML = counter = 0;
});
