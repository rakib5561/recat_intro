import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  return (
    <div className="App">

      <Counter></Counter>

    </div>
  );
}


function Counter() {

  const [count, setCount] = useState(0);

  // increase funciton
  const increaseBtn = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  //Decrease Function
  const decreaseBtn = () => {
    const newCount = count - 1;
    setCount(newCount);
  }


  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={increaseBtn}>Increase</button> <br></br>
      <button onClick={decreaseBtn}>Decrease</button>

    </div>
  )

}


export default App;
