/*
Event

// document load event
// img load event





*/

/*
User Event

mouse events

- click
- double click
- mouse move
- mouse over
- mouse out
- ...


touch events


keyboard event
- key press
- key down 
- key up
- ...

voice events



*/

// triggering, handler callback functions

const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", handleClick);

function handleClick() {
  //the-box id'li kutunun fon rengini yap
  const boxEl = document.getElementById("the-box");
  boxEl.style.backgroundColor = "pink";
}

const pElList = document.querySelectorAll("p");

for (let i = 0; i < pElList.length; i++) {
  pElList[i].style.backgroundColor = "yellow";
}
