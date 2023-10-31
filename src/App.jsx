import 'bulma/css/bulma.min.css'
import { useState } from 'react'
import { Box, Form, Heading, Tag } from 'react-bulma-components'

import { convertirMillasAKms } from './conversor'

const { Control, Field, Label, Input } = Form

const INITIAL_VALUE = ''

const App = () => {
  const [millas, setMillas] = useState(INITIAL_VALUE)

  const kilometros = millas === INITIAL_VALUE ? '<Ingrese millas>' : isNaN(millas) ? '<Ingrese un valor numérico>' : convertirMillasAKms(millas)
  const colorConversion = millas === INITIAL_VALUE || isNaN(millas) ? 'warning' : 'success'

  return (
    <div className="App">
      <Box>
        <Heading>
          Conversor de millas a kilómetros - React
        </Heading>
        <Field>
          <Label>Millas</Label>
          <Control>
            <Input value={millas} name="millas" autoComplete="off" data-testid="millas" onChange={(event) => setMillas(event.target.value)} />
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

export default App