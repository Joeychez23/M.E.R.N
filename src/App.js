//import logo from './logo.svg';
import { useState, useEffect} from 'react';
import './App.css';

let indexData

let data


function App() {
  const [counter, setCounter] = useState(0);
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    async function getData() {
      const response = await fetch('/books');
      const val = await response.json();  
      //data = val;
      setBooks(val);
    }
    getData();
    setCounter(100);
  }, []);


  //getData();
  
  console.log(books);
  //const response = fetch('/books');
  //const val = response.json();
  //console.log(data);
  /*
  <button onClick={() => setCounter((prevCount) => prevCount -1)}>-</button>
  <h1>{counter}</h1>
  <button onClick={() => setCounter((prevCount) => prevCount +1)}>+</button>
  */


  return (
    <div className="App">
      <>
      <h1>Mongo, Express, React, Node M.E.R.N test</h1>
        {
          <div class='container-fluid'>
            {books.map(book => (
              <ul class= "data" key= {book.id}>
                <li>Title: {book.Title}</li>
                <li>Author: {book.Author}</li>
              </ul>
            ))}
          </div>
        }


      </>

    </div>
  );
}

export default App;
