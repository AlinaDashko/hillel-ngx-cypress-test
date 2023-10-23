import {LoginPage} from "../../PageObjects/LoginPage";

describe("Login page", () => {
  it('The form must be filled in correctly', () => {
    const loginPage = new LoginPage()
    loginPage.navigate()
    loginPage.fill("alina@test.test", "Password1+", true)
    loginPage.clickLoginButton()
  })
})
