/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it( 'Deve fazer login com sucesso', () => {
        cy.get('#username').type('carol.teste29@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, carol.teste29 (não é carol.teste29? Sair)')
    })

it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
    cy.get('#username').type('mariaa.teste29@teste.com.br')
    cy.get('#password').type('teste@123')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('exist')   
});

it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
    cy.get('#username').type('carol.teste29@teste.com.br')
    cy.get('#password').type('teste@1234444')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('contain','Erro: A senha fornecida para o e-mail carol.teste29@teste.com.br está incorreta. Perdeu a senha?')
    cy.get('.woocommerce-error').should('exist') 
});


})
