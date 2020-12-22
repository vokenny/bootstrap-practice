/// <reference types="cypress" />

context("Home Snippet Spec", () => {
    beforeEach(() => {
        cy.visit("/index.html")
    })

    describe("Home content", () => {
        it("Opening hours should be correct", () => {
            /*
            Chaining .contains keeps looking inside the increasingly smaller scope,
            so the whole element needs to be queried again if you want the whole element

            Assigning the element to a variable, and referencing the variable doesn't work either
            i.e. 
            var openingHours = cy.get("#openinghours")
            openingHours.contains("Opening Hours")
            openingHours.contains("Monday - Friday") // Still looks inside the smaller scope
            */

            cy.get("#openinghours").contains("Opening Hours")
            cy.get("#openinghours").contains("Monday - Friday")
            cy.get("#openinghours").contains("8:00am - 4:30pm")
        })

        it("Phone should be correct", () => {
            cy.get("#phone").contains("012345 123456")
        })

        it("Address should be correct", () => {
            cy.get("#address").contains("Address")
            cy.get("#address").contains("Building name")
            cy.get("#address").contains("Street name")
            cy.get("#address").contains("Town/City")
            cy.get("#address").contains("Postcode")
        })
    })

    describe("Carousel interaction", () => {
        it("Clicking Next should progress to the next slide", () => {
            cy.get(".carousel-caption > h4").contains("First slide")
            cy.get("#next").click()
            cy.get(".carousel-caption > h4").contains("Second slide")
        })

        it("Clicking Back should progress to the previous slide", () => {
            cy.get(".carousel-caption > h4").contains("First slide")
            cy.get("#back").click()
            cy.get(".carousel-caption > h4").contains("Third slide")
        })

        const carouselIndicators = require("../fixtures/carouselIndicators.json")
        carouselIndicators.forEach((indicator) =>
            it("Clicking the indicators should jump straight to the corresponding slide", () => {
                cy.get(`${indicator.selector}`).click()
                cy.get(".carousel-caption > h4").contains(indicator.caption)
            })
        )
    })

})