// Functional Based Component
// function App() {
//   return <h1>Hello Momin</h1>;
// }

// Class based Component
// import { Component } from "react";
// class App extends Component { // OR write class App extends React.Component then we don't have to import
//   render() { // to show content in browser
//     return <h1>Hello John Doe</h1>;
//   }
// }

// function App() {
//   const name = "John Doe";
//   const multiply = (num1, num2) => num1 * num2;
//   const specialClass = "special-class";
//   const friendList = ["Momin", "Ishitaq", "HuXn", "Ruby"];

//   return (
//     <>
//       <h1>{name}</h1>
//       <h3>2 * 7 = {multiply(2, 7)}</h3>
//       <h2>My Friends list:</h2>
//       <ol>
//         {friendList.map((item) => {
//           return <li>{item}</li>;
//         })}
//       </ol>

//       <h4 className={specialClass}>I am special class</h4>
//     </>
//   );
// }

// function App() {
//   let list = [1, 2, 3, 4, 5];
//   return (
//     <>
//       {list.map((el) => (
//         <ul key={Math.random() * list.length}>
//           <li>{el}</li>
//         </ul>
//       ))}
//     </>
//   );
// }

// function App() {
//   const userInfo = [
//     {
//       username: "Momin",
//       emial: "test@gmail.com",
//       location: "Pakistan",
//     },
//     {
//       username: "Mateen",
//       emial: "test@gmail.com",
//       location: "Pakistan",
//     },
//     {
//       username: "Mubeen",
//       emial: "test@gmail.com",
//       location: "Pakistan",
//     },
//     {
//       username: "Mirza",
//       emial: "test@gmail.com",
//       location: "Pakistan",
//     },
//   ];
//   return (
//     <>
//       <ol>
//         {userInfo.map((user) => (
//           <li key={Math.random() * 10}>
//             <h1>User: {user.username}</h1>
//             <p>
//               <b>Email:</b> {user.emial} <br /> <b>Location:</b> {user.location}{" "}
//             </p>
//           </li>
//         ))}
//       </ol>
//     </>
//   );
// }

// Works with User Component.
// import { User01, User02 } from "./User";
// function App() {
//   const userList = [
//     {
//       name: "Momin Ishtiaq",
//       age: 22,
//       isMarried: false,
//       hobbies: ["Reading", "Coding", "Learning", "Gaming"],
//     },
//     {
//       name: "Mubeen Ishtiaq",
//       age: 24,
//       isMarried: false,
//       hobbies: ["Reading", "Accounting", "Learning", "Gaming"],
//     },
//     {
//       name: "Mateen Ishtiaq",
//       age: 27,
//       isMarried: false,
//       hobbies: ["Reading", "Trading", "Learning", "Gaming"],
//     },
//     {
//       name: "Mirza Ishtiaq",
//       age: 68,
//       isMarried: true,
//       hobbies: ["Mathematics", "Marketing", "Learning", "Gaming"],
//     },
//   ];

//   return (
//     <>
//       {userList.map((item) => {
//         return (
//           <User02
//             key={Math.random() * 10}
//             name={item.name}
//             age={item.age}
//             isMarried={item.isMarried}
//             hobbies={item.hobbies}
//           />
//         );
//       })}
//     </>
//   );
// }

// Props Children Example
// import { ChildrenExp01 } from "./ChildrenExp";
// function App() {
//   return (
//     <>
//       <ChildrenExp01>
//         <h1>This is an Example of Children Props</h1>
//         <p>
//           this all elements are being sent to the ChildrenExp Component and
//           render there.
//         </p>
//       </ChildrenExp01>
//     </>
//   );
// }

// Example of Conditional rendering using '&&' operator
// function Cart() {
//   let items = ["Wireless Earbuds", "Mobile", "Cables", "Adaptor", "Batterys"];

//   return (
//     <>
//       <h1>Cart 😄</h1>
//       {items.length > 0 && <h2>Items in cart: {items.length}</h2>}

//       <h2>👇 Products</h2>
//       <ul>
//         {items.map((item) => {
//           return <li key={Math.random()}>{item}</li>;
//         })}
//       </ul>
//     </>
//   );
// }
// function App() {
//   return (
//     <>
//       <Cart />
//     </>
//   );
// }

// inline Styling in React
// function App() {
//   return (
//     <>
//       <h1
//         style={{
//           color: "red",
//           fontSize: "50px",
//           backgroundColor: "teal",
//           textAlign: "center",
//           width: "50%",
//           margin: "0 auto",
//         }}
//       >
//         Hello World
//       </h1>
//     </>
//   );
// }

// External Styling in React
// import "./index.css";
// function App() {
//   return (
//     <>
//       <h1>Hello World!</h1>
//     </>
//   );
// }

// Simple Counter using React State and useState Hook
// using useState with numbers
// import { useState } from "react";

// const Counter = () => {
//   let [count, setCount] = useState(0);

//   let increment = () => {
//     setCount(count + 1);
//   };

//   let decrement = () => {
//     //count > 0 ? setCount(count - 1) : alert("Cannot go any lower");
//     count > 0 && setCount(count - 1);
//   };

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={increment}>➕</button>
//       <button onClick={decrement}>➖</button>
//     </>
//   );
// };
// let App = () => {
//   return (
//     <>
//       <Counter />
//     </>
//   );
// };

// Simple Name Changing using React State and useState Hook
// using useState with strings
// import { useState } from "react";

// function UserName() {
//   let [username, setUsername] = useState("Unknow");

//   let ChangeName = () => {
//     let input = document.querySelector("#input");
//     setUsername(input.value);
//   };

//   return (
//     <>
//       <h1>{username}</h1>
//       <input type="text" placeholder="Enter your name" id="input" />
//       <button onClick={ChangeName}>Change Name</button>
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       <UserName />
//     </>
//   );
// }

//using useState with arrays
// import { useState } from "react";
// function App() {
//   let [friends, setFriends] = useState(["Bhatti", "Fahad", "Zaidi"]);

//   let AddOne = () => {
//     let input = document.querySelector("input");
//     setFriends([...friends, input.value]);
// setFriends(friends.push(input.value)); this is a wrong approach (Error friends.map is not a function)
//   };

//   let RemoveOne = () => {
//     let input = document.querySelector("input");
//     setFriends(
//       friends.filter((item) => {
//         return item !== input.value;
//       })
//     );
//   };

//   return (
//     <>
//       <div>
//         <h3>👇 Friends List</h3>
//         <ul>
//           {friends.map((friend) => (
//             <li key={Math.random()}>{friend}</li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Enter friends name"
//           autoComplete="off"
//         />
//         <button onClick={AddOne}>Add Friend</button>
//         <button onClick={RemoveOne}>Remove Friend</button>
//         {/* <button onClick={UpdateOne}>Update Friend</button> Not implemented*/}
//       </div>
//     </>
//   );
// }

// Form in react
// import { useState } from "react";
// let App = () => {
//   let [username, setUsername] = useState("");
//   let [hero, setHero] = useState("Form Demo");

//   let handleChange = (event) => {
//     setUsername(event.target.value);
//   };

//   let handleForm = (event) => {
//     event.preventDefault();
//     setHero(username);
//     setUsername("");
//   };

//   return (
//     <>
//       <h1>{hero}</h1>
//       <form onSubmit={handleForm}>
//         {/*<input type="text" value="Hello"/> this is an example of uncontrolled component*/}
//         {/* <input type="text" value={username}/> this is also an example of controlled component*/}
//         <input type="text" name={username} onChange={handleChange} />
//         <button>Submit</button>
//       </form>
//     </>
//   );
// };

// useEffect in React
// import { useEffect, useState } from "react";
// function App() {
//   let [value, setValue] = useState(0);
// useEffect
// 1. useEffect inner code executes when the page renders for the first time.
// 2. Conditional execution of the useEffect
// 3. Dependency List

// useEffect(() => {
//   console.log("Hello");
//   document.title = `You clicked ${value} times`;
// });

// Example of conditional execution of useEffect
// useEffect(() => {
//   document.title = `You clicked ${value} times`;
//   if (value > 5) {
//     console.log("Hello");
//     document.querySelector("h1").style.color = "red";
//   }
// });

// Example of Dependency List
//   useEffect(() => {
//     console.log("Hello");
//     document.title = `You clicked ${value} times`;
//   }, [value]);

//   return (
//     <>
//       <h1>{value}</h1>
//       <button onClick={() => setValue(value + 1)}>➕</button>
//     </>
//   );
// }

// Example of useEffect {useEffect is good to use for fetching data}
// import { useState, useEffect } from "react";
// function App() {
//   let [data, setData] = useState([]);

//   useEffect(() => {
//     async function getData() {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts"
//       );
//       const data = await response.json();
//       setData(data);
//     }

//     getData();
//   }, []);
//   return (
//     <>
//       <ul>
//         {data.map((item) => (
//           <li key={Math.random()}>{item.title}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// ContextAPI Example {One of the way to solve the problem of props drilling but it is not a good practice}
// {if you want to sent another piece of data you have to create another createContext and export it in provider and consumer}
// import ComponentA from "./ComponentA";
// import { createContext } from "react"; // 1. Import createContext
// export const Data = createContext(); // 2. Create an instance of createContext
// export const Data1 = createContext();

// function App() {
//   const name = "Momin Ishtiaq";
//   const age = 18;
//   return ( //3. Wrap our component to which we want to sent our data to inside Data.Provider Component
//     <>
//       <Data.Provider value={name}>
//         <Data1.Provider value={age}>
//           <ComponentA />
//         </Data1.Provider>
//       </Data.Provider>
//     </>
//   );
// }

// useContext hook
// import ComponentB from "./ComponentB";
// import { createContext } from "react";
// export const Data = createContext();
// export const Data1 = createContext();
// function App() {
//   const name = "Momin Ishtiaq";
//   const age = 18;
//   return (
//     <>
//       <Data.Provider value={name}>
//         <Data1.Provider value={age}>
//           <ComponentB />
//         </Data1.Provider>
//       </Data.Provider>
//     </>
//   );
// }

// useReduce of React Example
// import { useReducer } from "react";
// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <>
//       <h1>{state.count}</h1>
//       <button onClick={() => dispatch({ type: "increment" })}>➕</button>
//       <button onClick={() => dispatch({ type: "decrement" })}>➖</button>
//       <button onClick={() => dispatch({ type: "reset" })}>💣</button>
//     </>
//   );
// }

// const initialState = { count: 0 };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return { ...state, count: state.count + 1 };
//     case "decrement":
//       return { ...state, count: state.count - 1 };
//     case "reset":
//       return { ...state, count: 0 };
//     default:
//       return state;
//   }
// };

// useRef of React example {It is use to access the properties of the DOM element}
// import { useRef } from "react";
// function App() {
//   let inputEle = useRef(null);

//   let write = () => {
//     inputEle.current.focus();
//     inputEle.current.value = "Momin Ishtiaq";
//   };

//   return (
//     <>
//       <input type="text" ref={inputEle} />
//       <button onClick={write}>Focus and Write Momin</button>
//     </>
//   );
// }

export default App;
