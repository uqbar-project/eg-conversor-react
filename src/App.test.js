import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'

import App from './App'

configure({ adapter: new Adapter() })

it('App levanta', () => {
  shallow(<App />)
})
it('convertir millas a kilómetros - inicialmente pide que ingreses millas', () => {
  const wrapper = shallow(<App />)
  const kms = wrapper.find('[data-testid="kms"]')
  expect(kms.text()).toBe('<Ingrese millas>')
})
it('convertir 10 millas a kilómetros - convierte correctamente', () => {
  const wrapper = shallow(<App />)
  const millas = wrapper.find('[data-testid="millas"]')
  millas.simulate('change', {
    'target': {
      value: '10'
    }
  })
  const kms = wrapper.find('[data-testid="kms"]')
  // https://stackoverflow.com/questions/52618569/set-the-locale-for-date-prototype-tolocalestring-for-jest-tests
  expect(kms.text()).toBe('16,093')
})
