/* array destructuring */
const myArray = ["apple", "fruit", "lemon"];

const [a, b, c] = myArray;

console.log(a, b, c);

/*  parametre parantez kısmında da destructuring yapılabilir*/
function test([a, b, c]) {
  console.log(a, b, c);
}

function test2(inArr) {
  const [a, b, c] = inArr;
}

const myArr2 = [12, 13, 14];

test(myArr2);

/*  using default values */

const myArr3 = [1, 2];

const [n, m, k = 24] = myArr3;

/* skip items  */

const [ l1, ,l3 ] = [ "x", "n", "t" ];

console.log(l3);



function useTemperature(){
    return [ 24, ()=>{ console.log( "24" )} ]
}


const [ temperatureVal, logFunc ] = useTemperature();


/* swapping items of an array */
 const myArr4 = ["x", "n", "f", "m"];

 [  myArr4[0], myArr4[1]   ] = [ myArr4[1], myArr4[0]  ];

 console.log( myArr4 );




