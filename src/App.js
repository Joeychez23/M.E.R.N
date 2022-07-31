//import logo from './logo.svg';
import { useState, useEffect} from 'react';
import './App.css';

let indexData

let data


function App() {
  const [counter, setCounter] = useState(0);
  const [books, setBook] = useState([]);
  
  useEffect(() => {
    async function getData() {
      const response = await fetch('/books');
      const val = await response.json();  
      data = val;
      setBook(val);
    }
    getData();
    setCounter(100);
  }, []);


  //getData();
  

  //const response = fetch('/books');
  //const val = response.json();
  //console.log(data);


  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount -1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount +1)}>+</button>
      <>
        {
          <ul class= "data">
            {books.map(book => (
              <li key={book.Title}>
                Title: {book.Title}
                Author{book.Author}
              </li>
            ))}
          </ul>
        }


      </>

    </div>
  );
}

export default App;
