import React, { Component } from 'react';
import './App.css';

import Characters from './components/Characters'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data)
        this.setState({ 
          starwarsChars: data.results,
          next: data.next,
          prev: data.previous
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  next = () => {
    if(!this.state.next) return
    this.getCharacters(this.state.next);
  }

  previous = () => {
    if(!this.state.prev) return
    this.getCharacters(this.state.prev);
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars (character height/mass)</h1>
        <Characters next = {this.next} prev = {this.previous} characters = {this.state.starwarsChars}/>
        <button className = "prevButton" onClick = {this.prev}>Prev</button>
        <button className = "nextButton" onClick = {this.next}>Next</button>
      </div>
    );
  }
}

export default App;
