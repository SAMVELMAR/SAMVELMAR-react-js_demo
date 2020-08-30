import React from 'react';
import logo from './logo.svg';
import './App.css';


function First(){
let name = 'Component';
  return(
    <div>
      <hr/>
  <h1>My First {name}</h1>
      <hr/> 
    </div>
  );

}

function Learning(proops){
    return(

    <h2>I'm learning {proops.name} Component</h2>
       
    );
  
  }

  function Secound(){
    let comp = 'Component';
      return(
        <div>
          <hr/>
      <h1>My Secound {comp}</h1>
          <hr/> 
        </div>
      );
    
    }
    



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Learning name = 'ReactJs'/>
        <First/>
        <Secound/>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
