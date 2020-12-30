/// <reference types='cypress' />

describe('Navbar Spec', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.visit('/index.html')
  })

  describe('Navbar branding', () => {
    const screenSizes = require('../fixtures/screen-sizes.json')
    
    screenSizes.forEach((screen) => {
      context(`Using ${screen.model} in ${screen.orientation} orientation`, () => {
        beforeEach(() => {
          cy.viewport(screen.model, screen.orientation)
        })

        it('Logo should be visible in navbar', () => {
          cy.get('#logo').should('be.visible')
        })
    
        it('Brand name should be visible in navbar', () => {
          cy.get('#brand').should('contain', 'bootstrAp prActice').and('be.visible')
        })
      })
    })
  })

  describe('Navbar toggle should only be immediately visible on screen widths less than than 992px', () => {
    const screenWidths = [992, 991]

    screenWidths.forEach((width) => {
      it(`Testing at screen width of ${width}px`, () => {  
        cy.viewport(width, 800)
        cy.visit('/index.html')

        const navItems = cy.get('.navbar-nav > li')
        
        if (width === 991) {
          navItems.should("be.hidden")
        } else {
          navItems.should('be.visible').and('contain', 'Home')
          navItems.should('be.visible').and('contain', 'Info Table')
          navItems.should('be.visible').and('contain', 'Gallery')
          navItems.should('be.visible').and('contain', 'Card Containers')
          navItems.should('be.visible').and('contain', 'Form & Alert')  
        }
      })
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