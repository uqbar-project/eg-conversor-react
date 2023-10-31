import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, test } from 'vitest'
import App from './App'


test('convierte un valor > 0 de millas a kilómetros correctamente', async () => {
  render(<App />)
  // El usuario carga 10 en millas
  const inputMillas = screen.getByTestId('millas')
  // Una forma de simular la carga del usuario es lanzar manualmente un evento con la información
  // que recibiría el componente de React
  // fireEvent.change(inputMillas, { target: { value: '10' } })
  // una variante más declarativa es
  await userEvent.type(inputMillas, '10') // OJO con el await!!
  // https://stackoverflow.com/questions/52618569/set-the-locale-for-date-prototype-tolocalestring-for-jest-tests
  expect(screen.getByTestId('kms')).toHaveTextContent('16,093')
})

test('inicialmente pide que convirtamos de millas a kilómetros', () => {
  render(<App />)
  expect(screen.getByTestId('kms')).toHaveTextContent('<Ingrese millas>')
})

test('si ingresa un valor alfabético la conversión de millas a kilómetros no se realiza', async () => {
  render(<App />)
  const inputMillas = screen.getByTestId('millas')
  await userEvent.type(inputMillas, 'dos')
  expect(screen.getByTestId('kms')).toHaveTextContent('<Ingrese un valor numérico>')
})
