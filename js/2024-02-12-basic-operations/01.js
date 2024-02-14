// toplama - addition
const sum = 3 + 5;

// çıkartma - subtraction
const result = 5 - 3;

// bölme - division
const result2 = 12 / 3;

// çarpma - multiplication

const result3 = 3 * 5;

// kalan - remainder

const remainder = 13 % 2;

// power
const result4 = 3 ** 2;

console.log(result4);

let i = 0;

i = i + 1;

i++;

// CONCATANATION
const userBasketTotal = 2500;
const basketItem1Price = 1200;
const basketItem2Price = 1300;
const userName = "Burak";
const dayToday = "Pazartesi";

const message1 =
  "Merhaba sayın " + userName + ". Bugün günlerden " + dayToday + "."; //string concatanation

/*  type coercion ( zorlamak )   */
const message2 =
  "Satın almış olduğunuz ürün toplamı " + (basketItem1Price + basketItem2Price);

const message3 = "Hello" + 3 * 5;

console.log(message1, message2, message3);



//TEMPLATE STRING LITERALS

// Bir string ifade içerisinde js expression kullanamak

const message4 = `Toplam: ${3 + 5}`; //backtick

const message5 = `Bugün günlerden ${dayToday}`;

console.log(message4, message5);
