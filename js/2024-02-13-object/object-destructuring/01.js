/*  Object Destructuring */
const myObj1 = { id: 1, name: "Square", color: "red" };

const { id, name, color } = myObj1;

console.log(id, name, color);

/*  using default values */
const myObj2 = { bgColor: "pink", weight: "10kg" };
const { bgColor, weight, shape = "circle" } = myObj2;

console.log(bgColor, weight, shape);

/*  renaming */

const myObj3 = { title: "Laptop", price: 12000 };

const {
  title: productTitle,
  price: productPrice,
  stockCount: productStockCount = 0,
} = myObj3;

console.log(productTitle, productPrice, productStockCount);

//props object kabul eden bir function

function test(props) {
  /*
    const hidden = props.hidden;
    const size = props.size;
    */

  const { hidden, size } = props;
}

/* object destructuring inside parameter paranthesis  parametre parantezinde object destructuring yapmak */
function test2({ hidden, size }, parameter2) {
  console.log(hidden, size, parameter2);
}

const componentProps = { hidden: false, size: "lg" };

test(componentProps);

test2(componentProps, 10000);
