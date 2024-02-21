const num1 = 1500;
const num2 = 3000;


// setTimeout();
const timeoutId1 = setTimeout(() => {
  console.log("Hello from future...");
}, 5000);

console.log(timeoutId1);

const timeoutId2 = setTimeout(() => {
  console.log("Hello from future 2 ...");
}, 8000);

console.log(timeoutId2);
// setInterval();

// cleartimeout ile timeout callback function execution'ı durdurabilirsiniz.
clearTimeout(timeoutId1);

const intervalId = setInterval(handleInterval, 500);

function handleInterval() {
  console.log("time is ticking...");
}

const buttonEl = document.querySelector("button");

buttonEl.addEventListener("click", handleClearInterval);

function handleClearInterval() {
  clearInterval(intervalId);
}


console.log( num1 + num2);