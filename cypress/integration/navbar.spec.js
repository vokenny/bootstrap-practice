/// <reference types='cypress' />

describe('Navbar Spec', () => {
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
          cy.get('#brand').should('be.visible').and('contain', 'bootstrAp prActice')
        })
      })
    })
  })

  describe('Navbar toggle should only be visible under 992px', () => {
    const screenWidths = [992, 991]

    screenWidths.forEach((width) => {
      it(`Testing at screen width ${width}px`, () => {
        cy.viewport(width, 800)

        const navToggle = cy.get('#navbar-toggle')
        
        if (width < 992) navToggle.should('be.visible')
        else navToggle.should('be.hidden')
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

    it.only('Clicking another snippet, then the brand name should show home.html snippet', () => {
      cy.get('#nav-table').click()
      cy.get('h2').should('contain', 'Vietnamese Dishes')

      cy.get('#brand').click()
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
          .and('contain', 'active')
      })
    })        
  })

  describe('Navbar toggle interaction', () => {
    context(`Using 991px screen width so navbar toggle is visible`, () => {
      beforeEach(() => {
        cy.viewport(991, 800)
        cy.get('.navbar-nav > li').should('be.hidden')
        cy.get('#navbar-toggle').should('be.visible')
      })

      it('Clicking "Home" should show home.html snippet', () => {
        cy.get('#navbar-toggle').click()
        cy.get('#nav-home').should('be.visible').click()
        cy.get('title').should('contain', 'Home - Bootstrap Practice')
        cy.get('#carouselWithIndicators').should('be.visible')
        cy.get('#nav-home')
        .should('have.attr', 'class')
        .should('contain', 'active')
      })

      const navbarData = require('../fixtures/navbar.json')

      navbarData.forEach((testCase) => {
        it(`Clicking "${testCase.link}" should show ${testCase.snippet} snippet`, () => {
          cy.get('#navbar-toggle').click()
          cy.get(`${testCase.linkId}`).click()
          cy.get('title').should('contain', `${testCase.title}`)
          cy.get('h2').should('contain', `${testCase.heading}`)
          cy.get(`${testCase.linkId}`)
            .should('have.attr', 'class')
            .and('contain', 'active')
        })
      })          
    })
  })
})