// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("payment_methods_check"), () => 
{

    cy.get('#tab-int-credit-card').should('contain', 'Credit Card').should('be.visible')
    cy.get('#tab-int-ccavenue-dbt').should('contain', 'Debit Card').should('be.visible')
    cy.get('#tab-int-ccavenue-nb').should('contain', 'Net Banking').should('be.visible')
    cy.get('#tab-int-ccavenue-wlt').should('contain', 'Wallet').should('be.visible')
    cy.get('#tab-int-ccavenue-upi').should('contain', 'UPI').should('be.visible')
    cy.get('#tab-int-ccavenue-layz').should('contain', 'LazyPay').should('be.visible')
    cy.get('.btn').should('contain', 'Pay Now').should('be.visible')
    cy.get('.bluecolor').should('contain', 'Terms & Conditions').should('be.visible')
    cy.get('.bluecolor').eq(2).invoke('removeAttr', 'target').click({force: true})
    cy.url().should('be.equal', 'https://www.magzter.com/terms-and-conditions')
    cy.go('back')
    cy.get('#coupCode').should('be.visible')
    cy.get('#coupCodeSub').should('contain', 'Apply', 'be.visible')

}