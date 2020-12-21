/// <reference types="cypress" />

context("Footer Spec", () => {
    beforeEach(() => {
        cy.visit("/index.html")
    })

    describe("Footer content", () => {
        it("Opening hours should be correct", () => {
            /*
            Chaining .contains keeps looking inside the increasingly smaller scope,
            so the whole element needs to be queried again if you want the whole element

            Assigning the element to a variable, and referencing the variable doesn't work either
            i.e. 
            var openingHours = cy.get("#foot-openinghours")
            openingHours.contains("Opening Hours")
            openingHours.contains("Monday - Friday") // Still looks inside the smaller scope - no idea why
            */

            cy.get("#foot-openinghours").contains("Opening Hours")
            cy.get("#foot-openinghours").contains("Monday - Friday")
            cy.get("#foot-openinghours").contains("8:00am - 4:30pm")
        })

        it("Phone should be correct", () => {
            cy.get("#foot-phone").contains("012345 123456")
        })

        it("Address should be correct", () => {
            cy.get("#foot-address").contains("Address")
            cy.get("#foot-address").contains("Building name")
            cy.get("#foot-address").contains("Street name")
            cy.get("#foot-address").contains("Town/City")
            cy.get("#foot-address").contains("Postcode")
        })
    })

})