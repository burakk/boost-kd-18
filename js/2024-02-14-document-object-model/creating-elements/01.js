/*
window;

document;

document;

document.body;

window.document.body;

*/

document.title = "Hello there!";

// selecting elements

const theButtonEl = document.getElementById("the-button");

console.log(theButtonEl);

//traversing

const parentElOfTheButtonEl = theButtonEl.parentElement;
console.log(parentElOfTheButtonEl);

// creating new elements

const newP = document.createElement("p");
newP.textContent = "Hello from the famous DOM of W3C";

document.body.append(newP);

//removing elements

newP.remove();

//changing styles dynamically
theButtonEl.style.backgroundColor = "pink";

//class modification
theButtonEl.classList.add("active");

//using data attribute
console.log(theButtonEl.dataset.themeUser);
console.log(theButtonEl.dataset.index);

//adding event listeners

theButtonEl.addEventListener("click", handleClick);

function handleClick() {
  alert("Hello me!");
}
