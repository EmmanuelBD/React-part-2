import logo from './logo.svg';
import './App.css';

import React from 'react';

/*class WelcomeComponent extends React.Component {
  render() {
    return (
      <div className="title">
        <h1>{this.props.name} is awesome, react works!!!!</h1>
      </div>
    );
  }
}

function App() {
  return (
    <div className="container">
      <WelcomeComponent name="Codetrain" />
    </div>
  );
}


export default App;*/





class WelcomeComponent extends React.Component {
  render() {
    
    return (
    <div className="title">
    <h1>Codetrain is awesome, react works!!!!</h1>;
    </div>
    )
  }
}

function App() {
 
  return (
  <div className="container">
    <WelcomeComponent />;
   </div>
  )
}

export default App;


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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

export default App;*/
