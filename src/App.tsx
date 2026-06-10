import './App.css'
import { useState } from 'react'
import { convertirMillasAKms } from './conversor'

const INITIAL_VALUE = ''

const App = () => {
  const [millas, setMillas] = useState(INITIAL_VALUE)

  const millasConvertido = +millas
  const kilometros =
    millas === INITIAL_VALUE
      ? '<Ingrese millas>'
      : convertirMillasAKms(millasConvertido)
  const colorConversion = millas === INITIAL_VALUE ? 'warning' : 'success'

  return (
    <div className="App">
      <div className="header">Conversor de millas a kilómetros - React</div>
      <div className="form">
        <div className="row">
          <label htmlFor="millas">Millas</label>
          <input
            type="number"
            value={millas}
            name="millas"
            id="millas"
            autoComplete="off"
            data-testid="millas"
            onChange={(event) => setMillas(event.target.value)}
          />
        </div>
        <div className="row">
          <div>Kilómetros</div>
          <div className={colorConversion}>
            <span data-testid="kms">{kilometros.toLocaleString('es')}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
