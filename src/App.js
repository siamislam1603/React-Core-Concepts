import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
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
  return(
    <div style={personStyle}>
      <h1>Harry Peterson</h1>
      <p style={{color:'skyblue'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam minima quo molestias reiciendis cum nulla dignissimos. Recusandae vero, ipsum sed quae corporis harum quaerat impedit sunt in, animi doloremque perferendis?</p>
    </div>
  );
}
export default App;
