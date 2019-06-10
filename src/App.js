import React from 'react';
import logo from './logo.svg';
import './App.css';

function Parent({name}){
  return (
      <div>
        <h1>Parent</h1>
        <Child name={name}/>
      </div>
  )
}

function Child({name}) {
  return (
      <div>
        <h1>Child</h1>
        <GrandChild name={name}/>
      </div>
  )
}

function GrandChild({name}) {
  return (
      <div>
        <h1>Grand Child</h1>
        <h3>Name: {name}</h3>
      </div>
  )
}
function App() {
  const name = "Bernard";
  return (
    <div className="App">
      <Parent name={name}/>
    </div>
  );
}

export default App;
