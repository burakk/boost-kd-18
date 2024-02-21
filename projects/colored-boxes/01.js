/* 
kutu üreten butonun click olayını dinle
buna uygun bir callback handler function yaz 

yazacağın callback handler function, her seferinde bir adet kutu üretecek

//üretilecek kutunun renkleri bir renk paleti dizisinden rastgele seçilecek
*/

const btnCreateBoxEl = document.getElementById("btn-create-box");
const stageEl = document.querySelector("main");

btnCreateBoxEl.addEventListener("click", handleClick);

const colorPalette = ["aqua", "yellow", "orange", "pink", "gray", "blue"];

let counter = 0;

function handleClick(e) {
  const random = Math.floor(Math.random() * colorPalette.length);
  const newBoxEl = document.createElement("div");

  /*
  newBoxEl.style.border = "2px solid black";
  newBoxEl.style.width = "50px";
  newBoxEl.style.height = "50px";
  */

  newBoxEl.classList = "box";
  newBoxEl.textContent = counter++;
  newBoxEl.style.backgroundColor = colorPalette[random];

  stageEl.append(newBoxEl);
}
