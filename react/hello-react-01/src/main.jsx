// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


import { createRoot } from 'react-dom/client';

const myRootEl = document.getElementById("root");

console.log(myRootEl);


const myRoot = createRoot(myRootEl);

console.log(myRoot);

myRoot.render("Hello React");


const root2El = document.getElementById("root2");

const root2 = createRoot(root2El);

//jsx 
root2.render(<h1>Hello World</h1>);



