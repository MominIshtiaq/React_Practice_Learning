const User01 = (props) => {
  let { name, age, isMarried, hobbies } = props; // using Destructuring
  return (
    <div>
      <h1>Name: {name}</h1>
      <p>
        Age: {age} Marial Status: {isMarried ? "Yes" : "No"}
      </p>
      <p>
        Hobbies:
        {hobbies.map((item) => {
          return (
            <ul>
              <li>{item}</li>
            </ul>
          );
        })}
      </p>
    </div>
  );
};

const User03 = ({ name, age, isMarried, hobbies }) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <p>
        Age: {age} Marial Status: {isMarried ? "Yes" : "No"}
      </p>
      <p>
        Hobbies:
        {hobbies.map((item) => {
          return (
            <ul>
              <li>{item}</li>
            </ul>
          );
        })}
      </p>
    </div>
  );
};

const User02 = (props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <p>
        Age: {props.age} Marial Status: {props.isMarried ? "Yes" : "No"}
      </p>
      <p>
        Hobbies:
        {props.hobbies.map((item) => {
          return (
            <ul>
              <li>{item}</li>
            </ul>
          );
        })}
      </p>
    </div>
  );
};

export { User01, User02, User03 };
