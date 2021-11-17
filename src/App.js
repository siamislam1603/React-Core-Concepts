import React,{useState,useEffect } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Person></Person>
        <Counter></Counter>
      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(0);
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increase Count</button>
      <button onMouseOver={()=>setCount(count-1)}>Decrease Count</button>
    </div>
  );
}
function Person(){
  const personStyle={
    border:'3px solid tomato',
    padding:'5px',
    margin:'20px',
    borderRadius:'10px'
  }
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setPersons(data));
  }, []) //We need to pass an empty array as the 2nd param, otherwise it'll load the data infinitely as dom render the elements multiple times and useEffect also calls itself multiple times. So, for this 2nd empty array, data will be load once.
  return(
    persons.map(person=>{
      return(
        <div style={personStyle}>
          <h1>{person.name}</h1>
          <p style={{color:'skyblue'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam minima quo molestias reiciendis cum nulla dignissimos. Recusandae vero, ipsum sed quae corporis harum quaerat impedit sunt in, animi doloremque perferendis?</p>
        </div>
      );
    })
  );
}
export default App;
