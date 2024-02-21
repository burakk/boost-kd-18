const myObj1 = { id: 1, title: "laptop", price: 24000 };

for (const key in myObj1) {
  const keyOfObj1 = key;
  const valueOfObj1 = myObj1[key];
  console.log(keyOfObj1, valueOfObj1);
}
