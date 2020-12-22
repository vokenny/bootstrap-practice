/// <reference types="cypress" />

context("Footer Spec", () => {
    beforeEach(() => {
        cy.visit("/index.html")
    })

    describe("Footer content", () => {
        const contact = require("../fixtures/contact-details.json")

        it("Opening hours should be correct", () => {
            /*
            Chaining .contains keeps looking inside the increasingly smaller scope,
            so the whole element needs to be queried again if you want the whole element

            Assigning the element to a variable, and referencing the variable doesn't work either
            i.e. 
            var openingHours = cy.get("#foot-openinghours")
            openingHours.contains("Opening Hours")
            openingHours.contains("Monday - Friday") // Still looks inside the smaller scope
            */

            cy.get("#foot-openinghours").contains("Opening Hours")
            cy.get("#foot-openinghours").contains(`${contact.openinghours.days}`)
            cy.get("#foot-openinghours").contains(`${contact.openinghours.hours}`)
        })

        it("Phone should be correct", () => {
            cy.get("#foot-phone").contains("Phone")
            cy.get("#foot-phone").contains(`${contact.phone}`)
        })

        it("Address should be correct", () => {
            cy.get("#foot-address").contains("Address")
            cy.get("#foot-address").contains(`${contact.address.building}`)
            cy.get("#foot-address").contains(`${contact.address.street}`)
            cy.get("#foot-address").contains(`${contact.address.city}`)
            cy.get("#foot-address").contains(`${contact.address.postcode}`)
        })
    })

})