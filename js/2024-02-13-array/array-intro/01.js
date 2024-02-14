const myArr = ["a", 1, true, [1, 2, 3], () => {}, function () {}, "burak"];

const myArr2 = [];

// array is referenced type

// typeof arr -> object

//accessing the items of an array
const firstElOfMyArr = myArr[0]; //dizi index'leri sıfırdan başlar
const lenghtOfMyArr = myArr.length;
const lastElOfMyArr = myArr[lenghtOfMyArr - 1];

const a = myArr[0];
const b = myArr[1];
const c = myArr[2];

/* *** DESTRUCTURING *** */

const [x, y, z] = myArr;

const [, , t] = myArr;
console.log(t);

/* mutation */

const alphaNumeric = ["a", 1, "b", 2, "x"];

alphaNumeric[5] = 15;

console.log(alphaNumeric); //array is mutable

const userName = "Burak";

userName[0] = "C";

console.log(userName); //string is immutable

// Being referenced typed
const defaultSettings = ["dark-theme", "zoom-level:12"];

const userSettings = defaultSettings;

userSettings[0] = "light-theme";

console.log(defaultSettings);
