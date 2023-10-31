
[![Build React App](https://github.com/uqbar-project/eg-conversor-react/actions/workflows/build.yml/badge.svg)](https://github.com/uqbar-project/eg-conversor-react/actions/workflows/build.yml) ![coverage](./badges/coverage/coverage.svg)

# Conversor ReactJS

![video](video/demo2020.gif)

## Variante con hooks

Para tener el conversor necesitamos definir:

- el estado: lo que queremos modificar (las millas)
- vs. lo que se puede calcular (los kilómetros en este caso, pero también el color del badge si hay un error en la conversión)

```jsx
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
```

App está definida como una _lambda_, y trabajamos el estado mediante un **hook**:

```js
  const [millas, setMillas] = useState(INITIAL_VALUE)
```

Como bien explica [la documentación oficial de React](https://es.reactjs.org/docs/hooks-overview.html), el hook `useState`

- recibe como input un valor inicial
- y devuelve un par en forma de lista: el valor del estado actual y una función que permite actualizar el nuevo valor

Esto significa que dentro de la función App, podemos obtener el valor de las millas con la referencia `millas` para convertirlo a kilómetros. Y cuando el usuario escriba un valor nuevo en el input, eso debe actualizar el estado mediante la invocación a la función `setMillas`. Como consecuencia,

- nos concentramos solo en la parte del estado que queremos cambiar
- nuestro componente puede seguir siendo funcional, por lo tanto se concentra solo en la parte **presentacional** (cómo muestra la información al usuario)

En definitiva, un componente React puede ser visto como una función, como en este ejemplo, o como una clase. Si te interesa ver el segundo approach, podés ver [este ejemplo](https://legacy.reactjs.org/docs/react-component.html) o bien [la documentación oficial de React](https://react.dev/reference/react/Component).
