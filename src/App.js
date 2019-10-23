import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import DogCard from './components/DogCard.js'

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
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({
        doggo: data.message
        })
      })

  }

  render(){
    // console.log(this.state.doggo)
    return(
    <div className="App">
      <header className="App-header">

        <p>
        Test boodoo
        <DogCard doggo={this.state.doggo} />
        </p>


      </header>
    </div>
    )
  };
}

export default App;
