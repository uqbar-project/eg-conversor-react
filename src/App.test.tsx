import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import { expect, test } from 'vitest'


test('convierte un valor > 0 de millas a kilómetros correctamente', async () => {
  render(<App />)
  const inputMillas = screen.getByTestId('millas')
  await userEvent.type(inputMillas, '10')
  // https://stackoverflow.com/questions/52618569/set-the-locale-for-date-prototype-tolocalestring-for-jest-tests
  expect(kilometers()).toBe('16,093')
})

test('inicialmente pide que convirtamos de millas a kilómetros', () => {
  render(<App />)
  expect(kilometers()).toBe('<Ingrese millas>')
})

const kilometers = () => screen.getByTestId('kms').textContent

