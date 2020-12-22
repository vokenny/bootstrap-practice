/// <reference types="cypress" />

context("Form Snippet Spec", () => {
  beforeEach(() => {
    cy.visit("/index.html")
    cy.get("#nav-form").click()
    cy.get("title").should("contain", "Form & Alert - Bootstrap Practice")
    cy.get("h2").should("contain", "Beep Boop Test Form")
  })

  describe("Form content", () => {
    const form = require("../fixtures/form.json")

    it("Success alert is empty when page loads", () => {
      cy.get("#success-alert").should("not.be.visible")
    })

    it.only("Form field content should be correct", () => {
      cy.get("#name-field").should("contain", `${form.nameField.label}`)
      cy.get("#name-field").should("contain", `${form.nameField.helptext}`)
      cy.get("#name-field > input")
        .should("have.attr", "placeholder")
        .should("contain", `${form.nameField.placeholder}`)


      cy.get("#email-field").should("contain", `${form.emailField.label}`)
      cy.get("#email-field").should("contain", `${form.emailField.helptext}`)
      cy.get("#email-field > input")
        .should("have.attr", "placeholder")
        .should("contain", `${form.emailField.placeholder}`)
    })
  })

  describe("Form submission", () => {
    it("Happy path - Submitting the form with compliant information should produce the success alert", () => {
      cy.get("#input-fullname").type("Test Tester")
      cy.get("#input-email").type("test@email.com")
      cy.get("#submit-button").click()

      cy.get("#name-field > div.invalid-feedback").should("be.hidden")
      cy.get("#email-field > div.invalid-feedback").should("be.hidden")

      cy.get("#success-alert")
        .should("contain", "Full name: Test Tester")
        .should("contain", "Email address: test@email.com")
    })

    it("Submitting an empty form should produce error messages on all fields", () => {
      cy.get("#submit-button").click()

      cy.get("#name-field > div.invalid-feedback")
        .should("contain", "Please enter your full name.")

      cy.get("#email-field > div.invalid-feedback")
        .should("contain", "Please enter a valid email address.")
    })

    it("Submitting over 100 characters for full name should produce the full name error", () => {
      cy.get("#input-fullname")
        .type("12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901")

      cy.get("#input-email").type("test@email.com")
      cy.get("#submit-button").click()

      cy.get("#name-field > div.invalid-feedback")
        .should("be.visible")
        .should("contain", "Please enter your full name.")

      cy.get("#email-field > div.invalid-feedback").should("be.hidden")
    })

    it("Submitting an invalid email address should produce the email error", () => {
      cy.get("#input-fullname").type("Test Tester")
      cy.get("#input-email").type("email")
      cy.get("#submit-button").click()

      cy.get("#name-field > div.invalid-feedback").should("be.hidden")
      cy.get("#email-field > div.invalid-feedback")
        .should("be.visible")
        .should("contain", "Please enter a valid email address.")
    })
  })

})