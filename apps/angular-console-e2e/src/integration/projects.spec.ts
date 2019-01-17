import {
  openProject,
  projectNames,
  projectPath,
  texts,
  waitForAnimation,
  whitelistGraphql
} from './utils';

describe('Projects', () => {
  beforeEach(() => {
    whitelistGraphql();
    openProject(projectPath('proj'));
    cy.get('div.title').contains('Projects');
  });

  it('shows projects screen', () => {
    cy.contains('proj');

    projectNames($p => {
      expect($p.length).to.equal(2);
      expect(texts($p)[0]).to.contain('proj');
      expect(texts($p)[1]).to.contain('proj-e2e');
    });
  });

  it('should pin and unpin projects', () => {
    cy.get('.favorite-icon.favorited').should('not.exist');
    cy.get('.favorite-icon:not(.favorited)')
      .should('have.length', 2)
      .first()
      .click();
    cy.get('.favorite-icon:not(.favorited)').should('have.length', 1);
    cy.get('.favorite-icon.favorited')
      .should('have.length', 1)
      .click();
    cy.get('.favorite-icon.favorited').should('not.exist');
    cy.get('.favorite-icon:not(.favorited)').should('have.length', 2);
  });

  // it('checks that hot actions work', () => {
  //   cy.get('button')
  //     .contains('Generate Service')
  //     .click();
  //   cy.get('div.context-title').contains('@schematics/angular - service');
  //   cy.get('input[name="project"]').should(($p: any) => {
  //     expect($p[0].value).to.equal('proj');
  //   });
  // });
});
