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
    const newMillas = this.state.millas
    const kilometros = newMillas === INITIAL_VALUE ? '<Ingrese millas>' : isNaN(newMillas) ? '<Ingrese un valor numérico>' : convertirMillasAKms(newMillas)
    const colorConversion = newMillas === INITIAL_VALUE || isNaN(newMillas) ? 'warning' : 'success'

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Conversor
          &nbsp;
            <small>React JS</small>
          </h1>
        </div>
        <p>Ingrese millas:</p>
        <input autoComplete="off" type="text" name="millas" data-testid="millas" onChange={(event) => this.convertir(event.target.value)} />
        <p>Ingrese kilómetros:</p>
        {Number.isNaN(this.state.kilometros) ?
          <p data-testid="error">El formato utilizado no es valido</p>
          : <p data-testid="kms">{this.state.kilometros.toLocaleString('es')}</p>}

      </div>
    )
  }
}

export default App
