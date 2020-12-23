/// <reference types='cypress' />

context('Navbar Spec', () => {
  beforeEach(() => {
    cy.visit('/index.html')
  })

  describe('Navbar content', () => {
    it('Logo should be visible in navbar', () => {
      cy.get('#logo').should('be.visible')
    })

    it('Brand name should be visible in navbar', () => {
      cy.get('#brand').should('contain', 'bootstrAp prActice').and('be.visible')
    })

    it('Navber menu items should contain five items', () => {
      const navItems = cy.get('.navbar-nav > li')
      
      navItems.should('contain', 'Home')
      navItems.should('contain', 'Info Table')
      navItems.should('contain', 'Gallery')
      navItems.should('contain', 'Card Containers')
      navItems.should('contain', 'Form & Alert')
    })
  })

  describe('Navbar interaction - Home snippet', () => {
    it('Clicking the logo should show home.html snippet', () => {
      cy.get('#logo').click()
      cy.get('title').should('contain', 'Home - Bootstrap Practice')
      cy.get('#carouselWithIndicators').should('be.visible')
      cy.get('#nav-home')
        .should('have.attr', 'class')
        .should('contain', 'active')
    })

    it('Clicking the brand name should show home.html snippet', () => {
      cy.get('#brand').click()
      cy.get('title').should('contain', 'Home - Bootstrap Practice')
      cy.get('#carouselWithIndicators').should('be.visible')
      cy.get('#nav-home')
      .should('have.attr', 'class')
      .should('contain', 'active')
    })

    it('Clicking "Home" should show home.html snippet', () => {
      cy.get('#nav-home').click()
      cy.get('title').should('contain', 'Home - Bootstrap Practice')
      cy.get('#carouselWithIndicators').should('be.visible')
      cy.get('#nav-home')
      .should('have.attr', 'class')
      .should('contain', 'active')
    })
  })

  describe('Navbar interaction - Other snippets', () => {
    const navbarData = require('../fixtures/navbar.json')

    navbarData.forEach((testCase) => {
      it(`Clicking "${testCase.link}" should show ${testCase.snippet} snippet`, () => {
        cy.get(`${testCase.linkId}`).click()
        cy.get('title').should('contain', `${testCase.title}`)
        cy.get('h2').should('contain', `${testCase.heading}`)
        cy.get(`${testCase.linkId}`)
          .should('have.attr', 'class')
          .should('contain', 'active')
      })
    })        
  })

})