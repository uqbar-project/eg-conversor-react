import { Component } from 'react'
import React from 'react'
import 'bulma/css/bulma.min.css'
import { Box, Form, Heading, Tag } from 'react-bulma-components'

import { convertirMillasAKms } from './conversor'

const { Control, Field, Label, Input } = Form

const INITIAL_VALUE = ''

class App extends Component {
  constructor() {
    super()
    this.state = {
      millas: INITIAL_VALUE,
    }
  }

  actualizarMillas(newMillas) {
    this.setState({
      millas: newMillas,
    })
  }

  render() {
    const newMillas = this.state.millas
    const kilometros = newMillas === INITIAL_VALUE ? '<Ingrese millas>' : isNaN(newMillas) ? '<Ingrese un valor numérico>' : convertirMillasAKms(newMillas)
    const colorConversion = newMillas === INITIAL_VALUE || isNaN(newMillas) ? 'warning' : 'success'

    return (
      <div className="App">
        <Box>
          <Heading>
            Conversor de millas a kilómetros - React
        </Heading>
          <Field>
            <Label>Millas</Label>
            <Control>
              <Input value={this.state.millas} name="millas" autoComplete="off" data-testid="millas" onChange={(event) => this.actualizarMillas(event.target.value)} />
            </Control>
          </Field>
          <Field>
            <Label>Kilómetros</Label>
            <Tag color={colorConversion} rounded>
              <Label data-testid="kms">{kilometros.toLocaleString('es')}</Label>
            </Tag>
          </Field>
        </Box>
      </div>
    )
  }
}

export default App
