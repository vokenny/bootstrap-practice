/// <reference types="cypress" />

context("Navbar Spec", () => {
  beforeEach(() => {
    cy.visit("/index.html")
  })

  describe("Navbar content", () => {
    it("Logo should be visible in navbar", () => {
      cy.get("#logo").should("be.visible")
    })

    it("Brand name should be visible in navbar", () => {
      cy.get("#brand").should("contain", "Bootstrap Practice").and("be.visible")
    })

    it("Navber menu items should contain five items", () => {
      /*
      Chaining .contains keeps looking inside the increasingly smaller scope,
      so the whole element needs to be queried again if you want the whole element

      Assigning the element to a variable, and referencing the variable doesn't work either
      i.e. 
      var navItems = cy.get("#foot-openinghours")
      navItems.should("contain", "Home")
      navItems.should("contain", "Info Table") // Still looks inside the smaller scope
      */

      cy.get(".navbar-nav > li").should("contain", "Home")
      cy.get(".navbar-nav > li").should("contain", "Info Table")
      cy.get(".navbar-nav > li").should("contain", "Gallery")
      cy.get(".navbar-nav > li").should("contain", "Card Containers")
      cy.get(".navbar-nav > li").should("contain", "Form & Alert")
    })
  })

  describe("Navbar interaction - Home snippet", () => {
    it("Clicking the logo should show home.html snippet", () => {
      cy.get("#logo").click()
      cy.get("title").should("contain", "Home - Bootstrap Practice")
      cy.get("#carouselWithIndicators").should("be.visible")
    })

    it("Clicking the brand name should show home.html snippet", () => {
      cy.get("#brand").click()
      cy.get("title").should("contain", "Home - Bootstrap Practice")
      cy.get("#carouselWithIndicators").should("be.visible")
    })

    it("Clicking 'Home' should show home.html snippet", () => {
      cy.get("#nav-home").click()
      cy.get("title").should("contain", "Home - Bootstrap Practice")
      cy.get("#carouselWithIndicators").should("be.visible")
    })
  })

  describe("Navbar interaction - Other snippets", () => {
    const navbarData = require("../fixtures/navbar.json")

    navbarData.forEach((testCase) => {
      it(`Clicking '${testCase.link}' should show ${testCase.snippet} snippet`, () => {
        cy.get(`${testCase.linkId}`).click()
        cy.get("title").should("contain", `${testCase.title}`)
        cy.get("h2").should("contain", `${testCase.heading}`)
      })
    })        
  })

})