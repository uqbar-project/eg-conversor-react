import './App.css'

import React, { Component } from 'react'

import { convertirMillasAKms } from './conversor'
import logo from './logo.svg'

class App extends Component {
  constructor() {
    super()
    this.state = {
      kilometros: '<Ingrese millas>',
    }
  }

  convertir(newMillas) {
    this.setState({
      kilometros: convertirMillasAKms(newMillas),
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Conversor
            <small>React JS</small>
          </h1>
        </div>
        <p>Ingrese millas:</p>
        <input
          type="text"
          name="millas"
          data-testid="millas"
          onChange={(event) => this.convertir(event.target.value)} />
        <p>Ingrese kilómetros:</p>
        <p data-testid="kms">{this
          .state
          .kilometros
          .toLocaleString('es')
        }</p>
      </div>
    )
  }
}

export default App
