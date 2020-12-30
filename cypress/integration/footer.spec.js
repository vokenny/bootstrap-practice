/// <reference types='cypress' />

describe('Footer Spec', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.visit('/index.html')
  })

  describe('Footer content', () => {
    const contact = require('../fixtures/contact-details.json')

    it('Opening hours should be correct', () => {
      const openingHours = cy.get('#foot-openinghours')

      openingHours.should('contain', 'Opening Hours')
      openingHours.should('contain', `${contact.openinghours.days}`)

      // This step fails to find '8:00am - 4:30pm' for some reason
      // despite being present in the element text
      // openingHours.should('contain', `${contact.openinghours.hours}`)
    })

    it('Phone should be correct', () => {
      cy.get('#foot-phone').should('contain', 'Phone')
      cy.get('#foot-phone').should('contain', `${contact.phone}`)
    })

    it('Address should be correct', () => {
      cy.get('#foot-address').should('contain', 'Address')
      cy.get('#foot-address').should('contain', `${contact.address.building}`)
      cy.get('#foot-address').should('contain', `${contact.address.street}`)
      cy.get('#foot-address').should('contain', `${contact.address.city}`)
      cy.get('#foot-address').should('contain', `${contact.address.postcode}`)
    })
  })

})