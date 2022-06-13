import './App.css';
import { useState,useEffect } from 'react';
// const Person = (props) => {
//   return (
//     <>
//       <h1>Name: {props.name}</h1>
//       <h2>Last Name: {props.LastName} </h2>
//       <h3>Age: {props.age}</h3>
//     </>
//   )
// }
const App = () => {
  useEffect(() => {
  
    alert()
  })

  // first == name of state setfunction 
  const [counter, setCounter] = useState(0)
  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((nextCount) => nextCount + 1)}>+</button>
    </div>
  );
}

export default App;

