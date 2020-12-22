/// <reference types="cypress" />

context("Home Snippet Spec", () => {
    beforeEach(() => {
        cy.visit("/index.html")
    })

    describe("Home content", () => {
        const contact = require("../fixtures/contact-details.json")

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
            cy.get("#openinghours").contains(`${contact.openinghours.days}`)
            cy.get("#openinghours").contains(`${contact.openinghours.hours}`)
        })

        it("Phone should be correct", () => {
            cy.get("#phone").contains("Phone")
            cy.get("#phone").contains(`${contact.phone}`)
        })

        it("Address should be correct", () => {
            cy.get("#foot-address").contains(`Address`)
            cy.get("#foot-address").contains(`${contact.address.building}`)
            cy.get("#foot-address").contains(`${contact.address.street}`)
            cy.get("#foot-address").contains(`${contact.address.city}`)
            cy.get("#foot-address").contains(`${contact.address.postcode}`)
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

        const carouselIndicators = require("../fixtures/carousel-indicators.json")
        carouselIndicators.forEach((indicator) =>
            it("Clicking the indicators should jump straight to the corresponding slide", () => {
                cy.get(`${indicator.selector}`).click()
                cy.get(".carousel-caption > h4").contains(indicator.caption)
            })
        )
    })

})