const myCar1 = {
  color: "red",
  doorCount: 5,
};

const myCar2 = {
  color: "red",
  doorCount: 4,
};

function Hero(name, costumeColor) {
  this.name = name;
  this.costumeColor = costumeColor;

  this.sayName = function () {
    console.log(this.name);
  };
}

Hero.prototype.sayCostumeColor = function () {
  console.log(this.costumeColor);
};

const hero1 = new Hero("Batman", "Dark gray");

hero1.sayName();

hero1.sayCostumeColor();

console.log(Hero.__proto__.__proto__.__proto__);

console.log(Hero.toString());


const num = 24;

console.log( Object.getPrototypeOf(num) );
