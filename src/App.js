//import logo from './logo.svg';
import { useState, useEffect} from 'react';
import './App.css';

let indexData

let data


function App() {
  const [counter, setCounter] = useState(0);
  
  useEffect(() => {
    setCounter(100);
  }, []);


  //getData();
  /*
  async function getData() {
    const response = await fetch('/books');
    const val = await response.json();
    //console.log(val.length);
    return val;
    //indexData = val.length;
  
  }
  */
  //data = getData();
  const response = await fetch('/books');
  const data = await response.json();

  console.log(data);


  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount -1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount +1)}>+</button>
      <div className="data"></div>

    </div>
  );
}

export default App;
