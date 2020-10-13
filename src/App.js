import { Component } from 'react'
import React from 'react'
import { Box, Form, Heading, Tag } from 'react-bulma-components'

import { convertirMillasAKms } from './conversor'

const { Control, Field, Label, Input } = Form

class App extends Component {
  constructor() {
    super()
    this.state = {
      millas: '',
      kilometros: '<Ingrese millas>',
      colorConversion: 'warning',
    }
  }

  convertir(newMillas) {
    this.setState({
      millas: newMillas,
      kilometros: isNaN(newMillas) ? '<Ingrese un valor numérico>' : convertirMillasAKms(newMillas),
      colorConversion: isNaN(newMillas) ? 'warning' : 'success',
    })
  }

  render() {
    return (
      <div className="App">
        <Box>
          <Heading>
            Conversor de millas a kilómetros - React
        </Heading>
          <Field>
            <Label>Millas</Label>
            <Control>
              <Input value={this.state.millas} name="millas" autoComplete="off" data-testid="millas" onChange={(event) => this.convertir(event.target.value)} />
            </Control>
          </Field>
          <Field>
            <Label>Kilómetros</Label>
            <Tag color={this.state.colorConversion} rounded>
              <Label data-testid="kms">{this.state.kilometros.toLocaleString('es')}</Label>
            </Tag>
          </Field>
        </Box>
      </div>
    )
  }
}

export default App
