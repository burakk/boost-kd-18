// property -> color, doorCount
// accelarate -> method

// Object literal
const myCar = {
  /* key:value */
  color: "gray",
  /* key:value */
  doorCount: 5,
  /* key:value */
  accelarate: function () {
    console.log("I am speeding up!!!");
  },
  sayCarColor: function () {
    console.log("My color is " + this.color);
  },
};

//accessing the keys values

// dot notation
const myCarColor = myCar.color;
const doorCount = myCar.doorCount;

myCar.accelarate();
myCar.sayCarColor();

// square bracket notation
const hero = {
  costumeColor: "red",
  hasSuperPowers: true,
  name: "Spider",
  sayName: function () {
    console.log("I am the " + this.name + " of Nothingham...");
  },
};

const costumeColor = hero["red"];
const hasSuperPowers = hero["hasSuperPowers"];

hero["has" + "SuperPowers"];

hero["sayName"]();

const user = {
  userName: "Burak",
  id: 17,
  isRegistered: false,
};

/*
const userName = user.userName;
const id = user.id;
const isRegistered = user.isRegistered;
*/

// *** DESTRUCTURING ***

const { userName, id, isRegistered } = user;

console.log(userName, id, isRegistered);

/* *** Mutating The Object by changing a key's value *** */
let product = {
  id: 14,
  title: "Hp laptop",
  stockCount: 14,
};

product.stockCount = product.stockCount - 1;
product["stockCount"] = product.stockCount - 1;

console.log(product.stockCount);

/*  Being referenced typed */

const aObj = { id: 14, color: "red", shape: "square" };

const bObj = aObj;

aObj.color = "blue";

bObj.color = "purple";

console.log( aObj.color );



