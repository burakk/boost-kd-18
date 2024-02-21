const myArr = [1,2,3,4];

const copyOfMyArrV1 = [].concat(myArr);
const copyOfMyArrV2 = myArr.slice();

/*  copying an array via spread operator... */

const copyOfMyArrV3 = [ ...myArr ];

console.log(  copyOfMyArrV3 === myArr );

console.log( copyOfMyArrV3, myArr  );