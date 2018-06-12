import React, { Component } from 'react'
import Conversor from './conversor.js'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = { kilometros: "<Ingrese millas>" }
    this.convertir = this.convertir.bind(this)
  }
  
  convertir(event) {
    this.setState({
      kilometros: new Conversor().convertir(event.target.value)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Conversor <small>React JS</small></h1>
        </div>
        <p>Ingrese millas:</p>
        <input type="text" name="millas" id="millas" onChange={this.convertir} />
        <p>Ingrese kilómetros:</p>
        <p id="kms">{this.state.kilometros.toLocaleString('es')}</p>
      </div>
    );
  }
}

export default App
