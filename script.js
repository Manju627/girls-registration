const scriptURL = "https://script.google.com/macros/s/AKfycbxBwIgbPyiK-6FQfDkZPWNjKzkFHiQciK7CaX6CL4_D6p4JooclezYIrDdaJ8vnh6hoUg/exec";

const form = document.getElementById("registrationForm");
const shareBtn = document.getElementById("shareBtn");
const countDisplay = document.getElementById("clickCount");
const submitBtn = document.getElementById("submitBtn");

let clickCount = 0;
const maxClicks = 5;

// Add click counter logic
if (shareBtn && countDisplay) {
  shareBtn.addEventListener("click", () => {
    if (clickCount < maxClicks) {
      clickCount++;
      countDisplay.textContent = `Click count: ${clickCount}/${maxClicks}`;
    } else {
      alert("You have reached the maximum number of clicks!");
    }
  });
}

// Your other logic (e.g., form submit) can stay below
