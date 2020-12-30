/// <reference types='cypress' />

describe('Table Spec', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.visit('/index.html')
    cy.get('#nav-table').click()
    cy.get('title').should('contain', 'Info Table - Bootstrap Practice')
    cy.get('h2').should('contain', 'Vietnamese Dishes')
  })

  describe('Info Table content', () => {
    it('The whole Table content should be correct', () => {
      cy.get('#menu-table th:first-child > h3').should('contain', 'Main')
      cy.get('#menu-table th:last-child > h3').should('contain', 'Price')

      const menuData = require('../fixtures/menu.json')

      menuData.forEach((item) => {
        cy.get(`tbody > tr:nth-child(${item.index}) > td:first-child`).should('contain', `${item.name}`)
        cy.get(`tbody > tr:nth-child(${item.index}) > td:last-child`).should('contain', `${item.price}`)
      })
    })
  })

})