class LoginPage {
  // Locators
  Username() {
    return cy.get('input[placeholder="Username"]');
  }
  Password() {
    return cy.get('input[placeholder="Password"]');
  }
  buttonLogin() {
    return cy.get('button[type="submit"]');
  }

  // Method error/alert Required and error invalid Credentials
  errorIvalidCredentials() {
    return cy.get('div[role="alert"]');
  }
  errorMessageRequired() {
    return cy.get(
      ".oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message"
    );
  }

  // Input Method
  InputUsername(user) {
    return this.Username().type(user);
  }
  InputPassword(pass) {
    return this.Password().type(pass);
  }

  // Optional for Before Each
  // Login Flow Method
  Login(user, pass) {
    this.Username().type(user);
    this.Password().type(pass);
    this.buttonLogin().click();
  }
}

export default new LoginPage();
