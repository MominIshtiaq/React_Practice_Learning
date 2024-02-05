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
//     // setFriends(friends.push(input.value)); this is a wrong approach (Error friends.map is not a function)
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

let App = () => {};

export default App;
