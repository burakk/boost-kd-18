const arr1 = ["Monday", "Wednesday"];

/*  push method mutates the original array */
const newArr1Length = arr1.push("Saturday", "Sunday");
console.log(arr1);

/* pop method mutates the original array  */
const arr2 = [1, 2, 3, 4, 12];

const poppedArr2 = arr2.pop();

console.log(poppedArr2, arr2);

/* shift  mutates the original array*/
const arr3 = [34, 56, 78, 90];

const shiftedArr3Item = arr3.shift();

console.log(shiftedArr3Item, arr3);

/* unshift mutates the original array */
const arr4 = [45, 67, 96, 57];

const newArr4Length = arr4.unshift("a");

console.log(newArr4Length, arr4);

/* concat  no mutataion occurs */
const arr5 = ["a", "b", "c"];
const arr6 = [4, 7, 8];

const alphaNumericArr = arr5.concat(arr6);
console.log(arr5.concat(arr6), arr5, arr6);

/* includes  */
const arr7 = ["x", "m", "o", "o"];

const hasM = arr7.includes("m");

console.log(hasM);

/* indexOf */
console.log(arr7.indexOf("m"));

/* lastIndexOf */
console.log(arr7.lastIndexOf("o"));

/*  reverse */
const arr8 = ["a", "b", "c", "d"];

console.log(arr8.reverse() === arr8);

/* join  */
const arr9 = ["banana", "orange", "apple", "lemon"];

const joinedStr = arr9.join(" *** ");

console.log(joinedStr, typeof joinedStr);

/*  slice (array'den dilimler almak için kullanabilirsin)   */
const mixedCake = ["apple", "orange", "lemon", "chocolate", "cherry"];

const slice1 = mixedCake.slice(0, 2); //apple, orange

console.log(slice1, mixedCake);

const slice2 = mixedCake.slice(2);

const slice3 = mixedCake.slice(-4, -2);

const slice = mixedCake.slice(-4);

/* splice  mutates the original array */
const arr10 = [1, 14, "b", 24, "a"];

const removedElements1 = arr10.splice(0, 2); //["b", 24, "a"]
console.log(arr10);
const removedElements2 = arr10.splice(0, 2, "x"); //["x" "a"]

console.log(arr10);
