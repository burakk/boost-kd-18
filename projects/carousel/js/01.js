const movingContainerEl = document.querySelector("#carousel-products > ul");

/* --- Çözüm 1 */

// carousel birinci buton tıklandığında ul elemanının left-margin değerini 0 yap

// carousel ikinci buton tıklandığında ul elemanının left-margin değerini -300px yap

/*
const btn1El = document.getElementById("btn-1");
const btn2El = document.getElementById("btn-2");



btn1El.addEventListener("click", handleMouseClick1);

function handleMouseClick1(e) {
  movingContainerEl.style.marginLeft = "0";
}

btn2El.addEventListener("click", handleMouseClick2);

function handleMouseClick2(e) {
  movingContainerEl.style.marginLeft = "-100%";
}

*/

/*

--- Çözüm 2 

const carouselBtnList = document.querySelectorAll(
  "#carousel-products > nav > button"
);

for (let i = 0; i < carouselBtnList.length; i++) {
  carouselBtnList[i].addEventListener("click", handleMove);
}

function handleMove(e) {
  console.log(e);
  const { target } = e;
  console.log(target);
  const index = target.dataset.index;
  console.log(index, typeof index, index * -100 + "%");
  movingContainerEl.style.marginLeft = index * -100 + "%";
}
*/

/*

- Çözüm 3


*/

const carouselNavEl = document.querySelector("#carousel-products > nav");

carouselNavEl.addEventListener("click", (e) => {
  
  const { target } = e;
  const index = target.dataset.index;

  if(!index)return; 

  movingContainerEl.style.marginLeft = -100 * index + "%";
});
