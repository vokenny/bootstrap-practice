/// <reference types='cypress' />

describe('Home Snippet Spec', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.visit('/index.html')
  })

  describe('Home content', () => {
    const contact = require('../fixtures/contact-details.json')

    it('Opening hours should be correct', () => {
      const openingHours = cy.get('#openinghours')
      
      openingHours.should('contain', 'Opening Hours')
      openingHours.should('contain', `${contact.openinghours.days}`)
      openingHours.should('contain', `${contact.openinghours.hours}`)
    })

    it('Phone should be correct', () => {
      cy.get('#phone').should('contain', 'Phone')
      cy.get('#phone').should('contain', `${contact.phone}`)
    })

    it('Address should be correct', () => {
      cy.get('#foot-address').should('contain', `Address`)
      cy.get('#foot-address').should('contain', `${contact.address.building}`)
      cy.get('#foot-address').should('contain', `${contact.address.street}`)
      cy.get('#foot-address').should('contain', `${contact.address.city}`)
      cy.get('#foot-address').should('contain', `${contact.address.postcode}`)
    })
  })

  describe('Carousel interaction', () => {
    it('Clicking Next should progress to the next slide', () => {
      cy.get('.carousel-caption > h4').should('contain', 'First slide')
      cy.get('#next').click()
      cy.get('.carousel-caption > h4').should('contain', 'Second slide')
    })

    it('Clicking Back should progress to the previous slide', () => {
      cy.get('.carousel-caption > h4').should('contain', 'First slide')
      cy.get('#back').click()
      cy.get('.carousel-caption > h4').should('contain', 'Third slide')
    })

    const carouselIndicators = require('../fixtures/carousel-indicators.json')
    carouselIndicators.forEach((indicator) =>
      it(`Clicking ${indicator.caption} indicator should jump straight to the corresponding slide`, () => {
        cy.get(`${indicator.selector}`).click()
        cy.get('.carousel-caption > h4').should('contain', indicator.caption)
      })
    )
  })

})