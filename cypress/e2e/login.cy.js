describe('My First Test', () => {
  before(  () => {
    cy.visit('https://www.dolthub.com/signin');

  })

  beforeEach (() => {
    cy.get('input[name="username"]').clear();
    cy.get('input[name="password"]').clear();

  }) 

  it('Should be disabled when no username', () => { 
    cy.get('input[name="username"]').should('have.value', '');
    cy.get('button[data-cy=signin-with-email-button]').should('have.attr', 'disabled');

  }) 

  it('Should be disabled when no password', () => { 
    cy.get('input[name="password"]').should('have.value', '');
    cy.get('.button.bg-acc-hoverlinkblue.common_submit__mDCr6').should('have.attr', 'disabled');

  })

  it('Should be disabled when no username and no password', () => { 
    cy.get('input[name="username"]').should('have.value', '');
    cy.get('input[name="password"]').should('have.value', '')
    cy.get('button[data-cy=signin-with-email-button]').should('have.attr', 'disabled');

  }) 

  it('Login is failed when password is incorrect and username is correct', () => { 
    cy.get('input[name="username"]').type('adamitas');
    cy.get('input[name="password"]').type('pprobando123');
    cy.get('.button.bg-acc-hoverlinkblue.common_submit__mDCr6').should('not.have.attr', 'disabled');
    cy.get('.button.bg-acc-hoverlinkblue.common_submit__mDCr6').click();

  })  
  
  it('Login is failed when password is correct and username is incorrect', () => { 
    cy.get('input[name="username"]').type('adamitass');
    cy.get('input[name="password"]').type('Probando123');
    cy.get('.button.bg-acc-hoverlinkblue.common_submit__mDCr6').should('not.have.attr', 'disabled');
    cy.get('.button.bg-acc-hoverlinkblue.common_submit__mDCr6').click();

    })

  it('Login is failed when password is correct and username is correct', () => { 
    cy.get('input[name="username"]').type('defeatlol');
    cy.get('input[name="password"]').type('Probando123');
    cy.get('.button.bg-acc-hoverlinkblue.common_submit__mDCr6').should('not.have.attr', 'disabled');
    cy.get('.button.bg-acc-hoverlinkblue.common_submit__mDCr6').click();

    })
})
