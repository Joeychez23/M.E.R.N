//import logo from './logo.svg';
import './App.css';


function Person(props) {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h1>Last Name: {props.lastName}</h1>
      <h2>Age: {props.age}</h2>
    </>
  )
}

function App() {
  return (
    
    <div className="App">
      <Person name={'Joseph'} lastName={'Sanchez'} age={20}/>
      <Person name={'Jasper'} lastName={'Sanchez'} age={18}/>
    </div>
  );
}

export default App;
