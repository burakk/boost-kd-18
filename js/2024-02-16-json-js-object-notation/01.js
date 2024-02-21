const myJsObj = {
  id: 17,
  title: "laptop",
};

const myJsonStr = '{ "isRegistered":false, "id":28  }';

console.log(typeof myJsonStr);

const objFromJsonStr = JSON.parse(myJsonStr);

console.log(typeof objFromJsonStr);

const { isRegistered, id } = objFromJsonStr;

console.log(isRegistered, id);

const userData = {
  id: 307,
  name: "Deneme Asd",
  isAdmin: false,
};

const jsonStrFromUserData = JSON.stringify(userData);

console.log(jsonStrFromUserData, typeof jsonStrFromUserData);
