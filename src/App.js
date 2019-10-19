import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    mood: true,
    doggo: "",
    search: ""
  }

  render(){
    return(
    <div className="App">
      <header className="App-header">

        <p>
        Test boodoo
        </p>


      </header>
    </div>
    )
  };
}

export default App;
