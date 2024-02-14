let userName = "Burak";

const favoriteColor = "Blue";

//string properties
const userNameLength = userName.length;

console.log(userNameLength);

console.log(userName[0]);

userName[0] = "C"; //*** primitives are immutable

console.log(userName);

// *** string methods ***

//trim()

const userInp = "     burak  ";

console.log(userInp.trim(), userInp); //*** primitives are immutable

const userInpTrimmed = userInp.trim();

//toUpperCase()
const rightAnswer = "ANKARA";
const userAnswer = "Ankara";

if (rightAnswer.toUpperCase() === userAnswer.toUpperCase()) {
  console.log("tebrikler");
}

//toLocaleUpperCase()

console.log("istanbul".toUpperCase());
console.log("istanbul".toLocaleUpperCase("tr")); //non-latin karakter problemi için

//toLowerCase()
if (rightAnswer.toLowerCase() === userAnswer.toLowerCase()) {
  console.log("tebrikler");
}

//toLocaleLowerCase()
console.log("ISPARTA".toLowerCase());
console.log("ISPARTA".toLocaleLowerCase("tr"));

console.log(rightAnswer, userAnswer); // *** primitives are immutable

// includes
const userMessage = "Lorem ipsum dolores min...";

const bannedWord = "ipsuma";

console.log(userMessage.includes(bannedWord));

if (!userMessage.includes(bannedWord)) {
  console.log("Mesajınız iletilecek");
}

// indexOf
console.log(userMessage.indexOf(bannedWord));

// lastIndexOf
const userMessage2 = "Lorem ipsuma dolores min cuntum ipsuma dolores";

console.log(userMessage2.lastIndexOf(bannedWord));

//replace()
const userMessage3 = "Lorem ipsuma dolores min cuntum ipsuma dolores";

const modifiedUserMessage = userMessage3.replace(bannedWord, "");

console.log(modifiedUserMessage, userMessage3); // *** primitives are immutable

//replaceAll()

const modifiedUserMessage2 = userMessage3.replaceAll(bannedWord, "");

console.log(modifiedUserMessage2);

//slice()
const myCake = "Karamelli cheesecake";

const slice1 = myCake.slice(0, 7);

const slice2 = myCake.slice(0);

const slice3 = myCake.slice(-4);

const slice4 = myCake.slice(-10, -4);

console.log(slice3, slice4);

console.log(slice1, myCake); // *** primitives are immutable

//split()
const seasonsStr = "winter, summer, spring, fall";

const arrFromStr = seasonsStr.split(", ");

console.log( arrFromStr, typeof seasonsStr ); // *** primitives are immutable



/*  regexp - regular expressions  */

const myTextStr = "Deneme test, bir iki, üç, dört, deneme ...";

console.log(myTextStr.replace(/Deneme/gi, ""));
