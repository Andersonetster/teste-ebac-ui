/// <reference types="cypress" />

import EnderecoPage from '../support/page-objects/endereco.page'

describe('funcinalidade endereços faturamento e entrega', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })
        
    });


    it.only('deve fazer cadastrpo de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('dayane', 'santana', 'daytransportes', 'Catar','fausto ribeiro', '3', 'Sol Nascente', 'Pernambuco', '05280100', '11965650796', 'dayane@gmail.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso') 
    });
});
