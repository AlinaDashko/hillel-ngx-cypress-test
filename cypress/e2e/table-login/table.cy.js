describe('Smart table', ()=> {
    it('Add new user and check that the data is correct',() => {
        cy.addUser('5', 'Alina', 'Test', 'Testik', 'test@testik.com', '25')
    })

    it('Edit new user and check that the data is correct',() => {
        cy.editUser('13','Ali', 'Ka', 'Testiq', 'testiq@test.com', '74')
    })
})
