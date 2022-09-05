/// <reference types = "cypress"/>

describe('Session 1', () => {
    it('Registration', () => {
        cy.visit('http://www.automationpractice.com')
        cy.get('.login').click()
        cy.get('.page-heading').contains('Authentication')
        cy.get('.page-subheading').should('contain', 'Create an account')
        let email = 'cypresstest' + Math.random(2)
        cy.get('#email_create').type(email + '@gmail.com')
        cy.get('#SubmitCreate').click()
        cy.get('.page-subheading').should('contain', 'Your personal information')
        cy.get('#id_gender1').click()
        let fName = 'Qasim'
        let lName = 'Javed'
        cy.get('[name="customer_firstname"]').type(fName)
        cy.get('[name="customer_lastname"]').type(lName)
        cy.get('#passwd').type('Testing123!')
        cy.get('#days').select('13')
        cy.get('#months').select('October')
        cy.get('[name="years"]').select('1992')
        cy.get('#company').type('10Pearls')
        cy.get('#address1').type('Test Address1')
        cy.get('#address2').type('Test Address2')
        cy.get('#city').type('Islamabad')
        cy.get('#id_state').select('Arizona')
        cy.get('#postcode').type('12345')
        cy.get('#id_country').select('United States')
        cy.get('#other').type('Test Additional Information')
        cy.get('#phone').type('1234567890')
        cy.get('[name="phone_mobile"]').type('9876543210')
        cy.get('#alias').type('Test alias')
        cy.get('#submitAccount').click()
        cy.url().should('be.equal', 'http://automationpractice.com/index.php?controller=my-account')
        cy.get('.navigation_page').should('be.visible')
        let username;
        cy.get('.account > span').then(($elem) => {
            username = $elem.text()
            expect(username).to.equal(fName + ' ' + lName)
        })
        
    })
})