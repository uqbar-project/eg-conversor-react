/// <reference types="Cypress" />

describe('Caso feliz', () => {
  before(() => {
    cy.visit('/')
  })
  it('escribimos un numero positivo de millas a convertir', () => {
    cy.get('#millas')
      .type(10).should('have.value', '10')
  })
  it('y se tranforma a kilometros', () => {
    cy.get('#kms').contains('16,093')
  })

})
describe('Caso 0', () => {
  before(() => {
    cy.visit('/')
  })
  it('escribimos 0 en las millas a convertir', () => {
    cy.get('#millas')
      .type(0).should('have.value', '0')
  })
  it('y en los kilometros vemos 0', () => {
    cy.get('#kms').contains('0')
  })

})
describe('Caso alfabetico', () => {
  before(() => {
    cy.visit('/')
  })
  it('escribimos un valor que no es un numero en el input', () => {
    cy.get('#millas')
      .type('1.*-*/*').should('have.value', '1.*-*/*')
  })
  it('y aparece un cartel de error avisandonos que no es un input valido', () => {
    cy.get('#error')
  })

})
