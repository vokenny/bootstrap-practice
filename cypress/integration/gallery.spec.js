/// <reference types='cypress' />

describe('Gallery Spec', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.visit('/')
    cy.get('#nav-gallery').click()
    cy.get('title').should('contain', 'Photo Gallery - Bootstrap Practice')
    cy.get('h2').should('contain', 'Photo Gallery')
  })

  describe('Gallery interaction', () => {
    const thumbnails = require('../fixtures/gallery.json')

    thumbnails.forEach((thumbnail) => {
      it(`Clicking thumbnail ${thumbnail.index} should open the modal carousel, and be able to close it with "Close" button`, () => {
        cy.get('#lightbox-modal').should('be.hidden')
        cy.get(`#gallery > div:nth-child(${thumbnail.index}) > button`).click()

        cy.get('#lightbox-modal').should('be.visible')
        cy.get('#lightbox-modal-label').should('contain', 'Gallery of Placeholder Images')
        cy.get('.carousel-caption > h4').should('contain', thumbnail.caption)
        cy.get('#close-modal').click()

        cy.get('#lightbox-modal').should('be.hidden')
        cy.get('h2')
          .should('be.visible')
          .should('contain', 'Photo Gallery')
      })
    })
  })

})