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
            cy.get("#brand").contains("Bootstrap Practice").and("be.visible")
        })

        it("Navber menu items should contain five items", () => {
            /*
            Chaining .contains keeps looking inside the increasingly smaller scope,
            so the whole element needs to be queried again if you want the whole element

            Assigning the element to a variable, and referencing the variable doesn't work either
            i.e. 
            var navItems = cy.get("#foot-openinghours")
            navItems.contains("Home")
            navItems.contains("Info Table") // Still looks inside the smaller scope
            */

            cy.get(".navbar-nav > li").contains("Home")
            cy.get(".navbar-nav > li").contains("Info Table")
            cy.get(".navbar-nav > li").contains("Gallery")
            cy.get(".navbar-nav > li").contains("Card Containers")
            cy.get(".navbar-nav > li").contains("Form & Alert")
        })
    })

    describe("Navbar interaction", () => {
        it("Clicking the logo should show home.html snippet", () => {
            cy.get("#logo").click()
            cy.get("title").contains("Home - Bootstrap Practice")
            cy.get("#carouselWithIndicators").should("be.visible")
        })

        it("Clicking the brand name should show home.html snippet", () => {
            cy.get("#brand").click()
            cy.get("title").contains("Home - Bootstrap Practice")
            cy.get("#carouselWithIndicators").should("be.visible")
        })

        it("Clicking 'Home' should show home.html snippet", () => {
            cy.get("#nav-home").click()
            cy.get("title").contains("Home - Bootstrap Practice")
            cy.get("#carouselWithIndicators").should("be.visible")
        })

        it("Clicking 'Info Table' should show table.html snippet", () => {
            cy.get("#nav-table").click()
            cy.get("title").contains("Info Table - Bootstrap Practice")
            cy.get("h2").contains("Vietnamese Dishes")
        })

        it("Clicking 'Gallery' should show gallery.html snippet", () => {
            cy.get("#nav-gallery").click()
            cy.get("title").contains("Photo Gallery - Bootstrap Practice")
            cy.get("h2").contains("Photo Gallery")
        })

        it("Clicking 'Card Containers' should show cards.html snippet", () => {
            cy.get("#nav-cards").click()
            cy.get("title").contains("Card Containers - Bootstrap Practice")
            cy.get("h2").contains("Client Testimonials")
        })

        it("Clicking 'Form & Alert' should show form.html snippet", () => {
            cy.get("#nav-form").click()
            cy.get("title").contains("Form & Alert - Bootstrap Practice")
            cy.get("h2").contains("Beep Boop Test Form")
        })
    })

})