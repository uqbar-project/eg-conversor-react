import React from 'react'
import 'jest-enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallow } from 'enzyme'
import App from './App'

configure({ adapter: new Adapter() })

const MILLAS_SELECTOR = '[data-testid="millas"]'
const KMS_SELECTOR = '[data-testid="kms"]'

it('App levanta', () => {
  shallow(<App />)
})
it('convertir millas a kilómetros - inicialmente pide que ingreses millas', () => {
  const wrapper = shallow(<App />)
  const kms = wrapper.find(KMS_SELECTOR)
  expect(kms.text()).toBe("<Ingrese millas>")
})
it('convertir 10 millas a kilómetros - convierte correctamente', () => {
  const wrapper = shallow(<App />)
  const millas = wrapper.find(MILLAS_SELECTOR)
  millas.simulate('change', { 'target': { value: '10' } })
  const kms = wrapper.find(KMS_SELECTOR)
  expect(kms.text()).toBe("16.093")
})

