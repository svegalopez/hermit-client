describe('Settings', () => {
    describe('Change Password', () => {
        it('should be able to change your password', () => {
            // First log in
            cy.visit('/');
            cy.get('button').contains('LogIn').click();
            cy.get('[type="password"]').type('Rootroot1!');
            cy.get('[type="email"]').type('admin1@test.com');
            cy.get('button').contains('Login').click();
            cy.contains('LogOut');

            // Visit settings page

            cy.visit('/settings');
            cy.get('form')
        });

        after(() => {
            cy.contains('LogOut').click();
        })
    })
});

export default {}