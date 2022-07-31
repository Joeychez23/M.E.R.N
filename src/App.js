//import logo from './logo.svg';
import { useState, useEffect} from 'react';
import './App.css';



getData();
  async function getData() {
    const response = await fetch('/books');
    const val = await response.json();
    console.log(val);

    for(item of val) {
        const title = document.createElement('div');
        const author = document.createElement('div');
        author.setAttribute("style", "margin-bottom: 20px");
        title.textContent = `Title: ${item.Title}`;
        author.textContent = `Author: ${item.Author}`;

        data.append(title, author);


    }
}



function App() {
  const [counter, setCounter] = useState(0);


  useEffect(() => {
    setCounter(100);
  }, [])
  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount -1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount +1)}>+</button>
      <div class="data"></div>

    </div>
  );
}

export default App;
