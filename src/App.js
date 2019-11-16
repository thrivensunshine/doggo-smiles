import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import DogCard from './components/DogCard.js'
import CatCard from './components/CatCard.js'

class App extends Component {

  state = {
    mood: true,
    kitty: "",
    doggo: "",
    search: ""
  }

  componentDidMount(){
    // this.fetchDog()
    this.fetchCat()
    console.log(this.state)
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
    fetch("http://placekitten.com/200/300")
    .then(res => res.json())
    .then(data => {
      console.log(data + "in Cat fetch")
      this.setState({
        kitty: data.message
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
          <CatCard kitty={this.state.kitty} fetch={this.fetchCat} />
          <img className="dogPic" src={this.state.kitty} alt="" />
      </header>
    </div>
    )
  };
}

export default App;
