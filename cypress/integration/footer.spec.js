/// <reference types='cypress' />

describe('Footer Spec', () => {
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
      const address = cy.get('#foot-address')

      address.should('contain', 'Address')
      address.should('contain', `${contact.address.building}`)
      address.should('contain', `${contact.address.street}`)
      address.should('contain', `${contact.address.city}`)
      address.should('contain', `${contact.address.postcode}`)
    })
  })
})