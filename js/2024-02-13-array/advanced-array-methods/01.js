/* foreach */
const arr1 = [1, 2, 3, 4, 5];

arr1.forEach(handle);

function handle() {
  console.log("a");
}

arr1.forEach(() => {
  console.log("I am from arrow");
});

arr1.forEach(function () {
  console.log("I am from arrow");
});

const arr2 = ["a", "b", "c", "d", "e"];

arr2.forEach((item, index, arr) => {
  console.log(item, index, arr);

  //  "a", 0, ["a", "b", "c", "d", "e"]
  // "b", 1, ["a", "b", "c", "d", "e"]
  //...
});

arr2.forEach(func1);

function func1(item, index, arr) {
  console.log(item, index, arr);
}

const DATA_PEOPLE = [
  { id: 14, name: "Deneme", isRegistered: false },
  { id: 56, name: "Deneme1", isRegistered: false },
  { id: 57, name: "Deneme2", isRegistered: false },
  { id: 50, name: "Deneme3", isRegistered: false },
];

DATA_PEOPLE.forEach((personObj, index, arr) => {
  console.log(personObj.name);
  const { id, name, isRegistered } = personObj;
  const personEl = document.createElement("p");
  personEl.textContent = `id:${id} - name:${name} - isRegistered:${isRegistered} `;
  document.body.append(personEl);
  if (id === 56) {
    arr[index].isRegistered = true;
  }
});

console.log(DATA_PEOPLE);

/*  map  */
const nums = [1, 2, 3, 4, 5]; //[2,4,6,8,10]

const doubles = nums.map((item, index, arr) => {
  return item * 2;
});

console.log(doubles);

const doubles2 = nums.map(double);

function double(num) {
  return num * 2;
}

// ["lorem ipsum", "deneme", "abc"]  ->  [ "<p>lorem ipsum</p>", "<p>deneme</p>", "<p>abc</p>" ]

/*

[  
    { wrapper:"p", content:"lorem lorem"   },

    {wrapper:"h1", content:"deneme deneme"}

]


-> [ "<p>lorem lorem</p>", "<h1>deneme deneme</h1>"]  


*/

const tagElsIncoming = [
  { wrapper: "p", content: "lorem lorem" },
  { wrapper: "h1", content: "deneme" },
];

const tagElsWrapped = tagElsIncoming.map(wrap);

function wrap(item) {
  /*
    const tagName = item.wrapper;
    const tagContent = item.content;
    */
  const { wrapper, content } = item;

  const rVal = `<${wrapper}> ${content} </${wrapper}>`;

  return rVal;
}

console.log(tagElsWrapped);

/* ***  filter *** */

const myNums = [1, 2, 3, 4, 5, 6, 7];

const filteredArr1 = myNums.filter(() => {
  return false; //filter metoduna geçirdiğiniz callback her bir eleman için false döndürürürse hiç bir eleman filtreyi geçemez
});
//filteredArray1 -> [] boş bir dizi

const filteredArr2 = myNums.filter(() => {
  return true; //filter metoduna geçirdiğiniz callback her bir eleman için true döndürürürse her bir eleman filtreyi geçer
});
//filteredArray1 -> [1,2,3,4,5,6,7]

const myOddNums = myNums.filter((num) => {
  return num % 2 !== 0;
});

//arrow function kod bloğunda tek bir return statement yazacaksan arrow function kısa yazılışını kullanabilirsin

/* const myOddNums = myNums.filter((num)=>num % 2 !== 0 ) */

console.log(myOddNums);

// [  "a", 1, 2, "b", "d"  ] -> ["a", "b", "d"]

const DATA_EMPLOYEES = [
  { id: 34, name: "Deniz", profession: "Engineer" },
  { id: 33, name: "Deniz 2", profession: "Professor of none" },
  { id: 32, name: "Deniz 3 ", profession: "Engineer" },
  { id: 30, name: "Deniz 4", profession: "Professor of none" },
];

//sadece engineer olanları filtrele

const engineerList = DATA_EMPLOYEES.filter(
  (employee) => employee.profession.toLowerCase() === "engineer"
);

console.log(engineerList);

/* reduce */
const basket = [10000, 20000, 400, 200];

const total = basket.reduce((previousValue, currentValue, index, arr) => {
  // ilk adım  5000 - 10000 - 0

  console.log(previousValue, currentValue, index);

  return previousValue + currentValue;
}, 5000);

const totalV2 = basket.reduce((previousValue, currentValue, index, arr) => {
  // ilk adım  10000 - 20000 - 1
  // ikinci adım 30000 - 400 - 2
  // üçüncü adım 30400 - 200 - 3  //  30600

  console.log(previousValue, currentValue, index);

  return previousValue + currentValue;
});

console.log(totalV2);

const inventory = [
  { id: 0, title: "lenovo xm3", price: 54000, count: 1 },
  { id: 0, title: "lenovo f xm3", price: 12000, count: 1 },
  { id: 0, title: "xm3 mouse", price: 34000, count: 1 },
  { id: 0, title: "keyboard xm3", price: 54000, count: 1 },
  { id: 0, title: "Patex glue", price: 220, count: 1 },
];

const inventoryTotal = inventory.reduce((acc, current) => {
  return acc + current.price;
}, 0);

console.log(inventoryTotal);

/* find */
const myNums2 = [1, 2, 3, 5, 105, 12, 120];

const foundNum = myNums2.find((num) => {
  return num > 100;
});

/* findLast */
const lastFoundNum = myNums2.findLast((num) => {
  return num > 100;
});

console.log(foundNum, lastFoundNum);

/* findIndex */
const foundNumIndex = myNums2.findIndex((num) => {
  return num > 100;
});

console.log(foundNumIndex);

/* findLastIndex */
const foundNumLastIndex = myNums2.findLastIndex((num) => {
  return num > 100;
});

console.log(foundNumLastIndex);

/* every  ( dizideki tüm elemanlar verilen testi geçiyorsa true döndürecektir, diğer durumda false döndürür )*/
const myNums3 = [8, 4, 6];

const isAllEven = myNums3.every(isEven);

function isEven(num) {
  return num % 2 === 0;
}

console.log(isAllEven);

/* some  ( dizideki  tek bir eleman dahi  testi geçiyorsa true döndürecektir ) */
const myNums4 = [2, 3, 1, 5];

const hasEvenNums = myNums4.some(isEven);

console.log(hasEvenNums);

/* sort */

const myNums5 = [10001, 11, 3, 5, 199090];
const copyOfMyNums = myNums5.slice(); // slice metodu ile myNums5'in kopyasını alıyoruz;
/*
myNums5.sort(  (a, b)=>{

    if(a<b){
        return -1;
    }
    if(a>b){
        return 1;
    }

    return 0;

}  );
*/

myNums5.sort((a, b) => a - b);




console.log(myNums5);
