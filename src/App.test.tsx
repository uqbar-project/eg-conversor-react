import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, test } from 'vitest'
import App from './App'

const kilometers = () => screen.getByTestId('kms').textContent

describe('tests del conversor', () => {

  test('convierte un valor > 0 de millas a kilómetros correctamente', async () => {
    render(<App />)
    const inputMillas = screen.getByTestId('millas')
    await userEvent.type(inputMillas, '10')
    expect(kilometers()).toBe('16,093')
  })
  
  test('inicialmente pide que convirtamos de millas a kilómetros', () => {
    render(<App />)
    expect(kilometers()).toBe('<Ingrese millas>')
  })

})
