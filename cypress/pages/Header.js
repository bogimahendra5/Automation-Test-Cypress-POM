class Header {
  TittlePage() {
    return cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module");
  }
  TittleSection() {
    return cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-level");
  }
  UserProfile() {
    return cy.get(".oxd-userdropdown-tab");
  }
  AboutMenu = () => cy.contains("ul[role='menu']", "About");
  AboutPage = () => cy.get("div[role='document']");
}

export default new Header();
