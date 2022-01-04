/// <reference types="cypress" />

import EnderecoPage from '../support/page-objects/endereco.page'
//import endereco from '../fixtures/endereco.json'
const dadosEndereco = require('../fixtures/endereco.json')
describe('funcinalidade endereços faturamento e entrega', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })
        
    });


    it('deve fazer cadastrpo de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('dayane', 'santana', 'daytransportes', 'Brasil','fausto ribeiro', '3', 'Sol Nascente', 'Pernambuco', '05280100', '11965650796', 'dayane@gmail.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso') 
    });

    it.only('deve fazer cadastrpo de faturamento com sucesso - usando massa de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email
        )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso') 
    });



});

