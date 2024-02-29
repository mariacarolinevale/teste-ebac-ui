/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    it( 'Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('carol.teste29@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, carol.teste29 (não é carol.teste29? Sair)')
    })
})
