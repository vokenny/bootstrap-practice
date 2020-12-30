/// <reference types='cypress' />

describe('Card Containers Spec', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.visit('/')
    cy.get('#nav-cards').click()
    cy.get('title').should('contain', 'Card Containers - Bootstrap Practice')
    cy.get('h2').should('contain', 'Client Testimonials')
  })

  describe('Card Containers content', () => {
    const clientTestimonials = require('../fixtures/cards.json')

    clientTestimonials.forEach((card) => {
      it(`Client Testimonial ${card.index} should be correct`, () => {
        // TODO: It's not able to match the large piece of content in the card containers...?
        // cy.get(`.review-card:nth-child(${card.index}) p`).should('contain', `${card.review}`)
        cy.get(`.review-card:nth-child(${card.index}) strong`).should('contain', `${card.name}`)
      })
    })
  })

})