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
      <nav class = "M">
          <div class = "M-BTN-TOG" onclick="toggleNav()" ></div>
          <ul class = "M-L">
              <li class = "M-L-I"><a class = "M-L-I-A" href = "https://shielded-scrubland-08639.herokuapp.com/">Home</a></li>
              <li class = "M-L-I"><a class = "M-L-I-A" href = "#">Portfolio</a></li>
              <li class = "M-L-I"><a class = "M-L-I-A" href = "#">About Us</a></li>
              <li class = "M-L-I"><a class = "M-L-I-A" href = "#">Gallery</a></li>
              <li class = "M-L-I"><a class = "M-L-I-A" href = "#">Contact</a></li>
          </ul>
      </nav>


      <aside class = "S">
          <ul class = "S-L">
              <li class = "S-L-I"><span class = "S-L-I-S">Projects</span></li>
              <li class = "S-L-I"><a class = "S-L-I-A" href = "https://obscure-ravine-94158.herokuapp.com/">Poker Project</a></li>
              <li class = "S-L-I"><a class = "S-L-I-A" href = "https://pure-island-00084.herokuapp.com/">Location & AQ Data</a></li>
              <li class = "S-L-I"><a class = "S-L-I-A" href = "https://gentle-scrubland-61883.herokuapp.com/">Map Location</a></li>
              <li class = "S-L-I"><a class = "S-L-I-A" href = "https://arcane-chamber-79603.herokuapp.com/">M.E.R.N Test</a></li>
          </ul>
      </aside>
      <>
        {
          <div /*class='container-fluid'*/>
            <h1 class='title'>Mongo, Express, React, Node (M.E.R.N) test</h1>
            {books.map(book => (

              <ul class= "data" key= {book.id}>
                <li>Title: {book.Title}</li>
                <li>Author: {book.Author}</li>
              </ul>
            ))}
          </div>
        }


      </>
      <script src="webNav.js"></script>

    </div>
  );
}

export default App;
