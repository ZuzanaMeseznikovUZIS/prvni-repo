describe('Check iframes on specific pages', () => {
  const pages = [
    'https://shnu.uzis.cz/cs/analyzy/nezadouci-udalosti-kategorie-pzs/',
    'https://shnu.uzis.cz/cs/analyzy/nezadouci-udalosti-trendy-cas/',
    'https://shnu.uzis.cz/cs/analyzy/nezadouci-udalosti-pozice-pzs-pocet-cetnost/',
  ];

  pages.forEach((page) => {
    it(`Check iframe on ${page}`, () => {
      cy.visit(page);

      cy.get('iframe').should('be.visible').then(($iframes) => {
        if ($iframes.length > 0) {
          $iframes.each((index, iframe) => {
            cy.wrap(iframe).click();
            cy.log('Iframe je klikateľný.');
          });
        } else {
          cy.log(`Na stránke ${page} sa nenachádza žiadny iframe.`);
        }
      });
    });
  });
});
