import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    mood: true,
    doggo: "",
    search: ""
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json){
      .then(data => {
        this.setState({
          doggo: data
        })
      })
    }
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
