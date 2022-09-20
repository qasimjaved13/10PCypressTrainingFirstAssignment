/// <reference types = "cypress"/>


describe('Session 2', () => {

    beforeEach(() => {
        cy.fixture('example').then((data) => {
            cy.visit('http://www.automationpractice.com')
            cy.get(data.loginBtn).click()
        })
    })

    const email = 'cypresstest' + Math.random(2)
    let username, fName = 'Qasim', lName = 'Javed'

    it('Registration', () => {
        cy.fixture('example').then((data) => {
            cy.get(data.pageHeading).contains('Authentication')
            cy.get(data.pageSubHeading).should('contain', 'Create an account')
            cy.get(data.emailTxt).type(email + '@gmail.com')
            cy.get(data.submitBtn).click()
            cy.get(data.pageSubHeading).should('contain', 'Your personal information')
            cy.get(data.genderMale).click()
            
            cy.get(data.firstNameTxt).type(fName)
            cy.get(data.lastNameTxt).type(lName)
            cy.get(data.passwordTxt).type('Testing123!')
            cy.get(data.days).select('13')
            cy.get(data.months).select('October')
            cy.get(data.year).select('1992')
            cy.get(data.company).type('10Pearls')
            cy.get(data.address1).type('Test Address1')
            cy.get(data.address2).type('Test Address2')
            cy.get(data.city).type('Islamabad')
            cy.get(data.state).select('Arizona')
            cy.get(data.postcode).type('12345')
            cy.get(data.country).select('United States')
            cy.get(data.other).type('Test Additional Information')
            cy.get(data.phone).type('1234567890')
            cy.get(data.mobile).type('9876543210')
            cy.get(data.alias).type('Test alias')
            cy.get(data.submitAccountBtn).click()
            cy.url().should('be.equal', 'http://automationpractice.com/index.php?controller=my-account')
            cy.get(data.navigationPage).should('be.visible')
            cy.get(data.userName).then(($elem) => {
                username = $elem.text()
                expect(username).to.equal(fName + ' ' + lName)
            })
        })
    })

    it('Login', () => {
        cy.fixture('example').then((data) => {
            cy.login(email, "Testing123!")
            cy.get(data.userName).then(($elem) => {
                username = $elem.text()
                expect(username).to.equal(fName + ' ' + lName)
            })
        })
    })
})