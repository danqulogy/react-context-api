import React from 'react';
import './App.css';
const Context = React.createContext();
// Context has two properties. Provide and Consumer

function Parent(){
    return (
        <div>
            <h1>Parent</h1>
            <Child/>
        </div>
    )
}

function Child() {
    return (
        <div>
            <h1>Child</h1>
            <GrandChild />
        </div>
    )
}

function GrandChild() {
    return (
        <Context.Consumer>
            {(name) => (
                <div>
                    <h1>Grand Child</h1>
                    <h3>Name: {name}</h3>
                </div>
            )}
        </Context.Consumer>

    )
}
function App() {
    const name = "Bernard";
    return (
        <div className="App">
            <Context.Provider value={name}>
                <Parent name={name}/>
            </Context.Provider>
        </div>
    );
}

export default App;
