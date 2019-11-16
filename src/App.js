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
    // this.fetchDog()
  }

  fetchDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({
        doggo: data.message
        })
      })

  }

  fetchCat = () => {
    fetch("http://placekitten.com/g/200/300")
    .then(res => res.json())
    .then(data => {
      this.setState({
        
      })
    })

  }



  render(){
    // console.log(this.state.doggo)
    return(
    <div className="App">
      <header className="App-header">

        <button className="myButton" onClick = {() => {
            console.log(this.state)
            this.fetchDog()}
          }>Get A Doggo</button>
        <DogCard doggo={this.state.doggo} fetch={this.fetchDog} />



      </header>
    </div>
    )
  };
}

export default App;
