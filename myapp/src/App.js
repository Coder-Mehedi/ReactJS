import React, { Component } from 'react';
import './App.css';
import Ninjas from './Ninjas.js'
import AddNinja from './AddNinja'
class App extends Component {
  state = {
    ninjas: [
      {name: 'Mehedi', age: 30, belt: 'black', id: 1},
      {name: 'Zoha', age: 35, belt: 'white', id: 2},
      {name: 'Shafi', age: 20, belt: 'red', id: 3}
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja = (id) => {
    console.log(id)
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })
    this.setState({
      ninjas: ninjas
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome :)</p>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
