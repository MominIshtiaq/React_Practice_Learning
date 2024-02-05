import { Data, Data1 } from "./App";

// const ComponentA = () => { // use in different places at different times
//   return (
//     <>
//       <Data.Consumer>
//         {(name) => {
//           return <h1>My name is {name}</h1>;
//         }}
//       </Data.Consumer>
//       <Data1.Consumer>
//         {(age) => {
//           return <h1>My age is {age}</h1>;
//         }}
//       </Data1.Consumer>
//     </>
//   );
// };

// OR

const ComponentA = () => {
  // use both in same places at same time
  return (
    <>
      <Data.Consumer>
        {(name) => {
          return (
            <>
              <Data1.Consumer>
                {(age) => {
                  return (
                    <h1>
                      My name is {name} and I am {age} years old.
                    </h1>
                  );
                }}
              </Data1.Consumer>
            </>
          );
        }}
      </Data.Consumer>
    </>
  );
};

export default ComponentA;
