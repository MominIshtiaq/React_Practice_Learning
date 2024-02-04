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

function App() {
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}

export default App;
