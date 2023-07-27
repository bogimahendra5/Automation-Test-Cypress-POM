import Login from "../pages/LoginPage";
import Dashboard from "../pages/DashboardPage";
import SideMenu from "../pages/SideMenu";
import Header from "../pages/Header";

describe("Login Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Login Valid Credentials", () => {
    Login.Login("Admin", "admin123");
    Header.TittlePage().should("contain.text", "Dashboard");
    Dashboard.widgetall().should("be.visible");
    SideMenu.Active()
      .should("contain", "Dashboard")
      .and("have.css", "color", "rgb(255, 255, 255)");
  });

  it("Login Invalid Username or Password", () => {
    Login.Login("invalid", "admin");
    Login.errorIvalidCredentials().should("be.visible");
  });

  it("Login Invalid Username Null", () => {
    Login.Login(" ", "admin123");
    Login.errorMessageRequired().should("be.visible");
  });

  it("Login Invalid Password Null", () => {
    Login.Login("admin", " ");
    Login.errorMessageRequired().should("be.visible");
  });

  it("Input username then Clear", () => {
    const input = Login.InputUsername("Admin");
    input.clear();
    Login.errorMessageRequired().should("be.visible");
  });

  it("Input password then Clear", () => {
    const input = Login.InputPassword("Admin123");
    input.clear();
    Login.errorMessageRequired().should("be.visible");
  });
});
