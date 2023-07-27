import Header from "../../pages/Header";
import Login from "../../pages/LoginPage";
import SideMenu from "../../pages/SideMenu";

describe("Page Admin", () => {
  beforeEach(() => {
    cy.visit("/");
    Login.Login("Admin", "admin123");
    SideMenu.Admin().click();
  });

  it("Verify direct to page admin", () => {
    Header.TittlePage().should("contain.text", "Admin");
    Header.TittleSection().should("contain.text", "User Management");
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers"
    );
  });
});
