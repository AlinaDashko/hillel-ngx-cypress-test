import {BasePage} from "./BasePage";

export class LoginPage extends BasePage {
  _emailInputSelector = '#input-email'
  _passwordInputSelector = '#input-password'
  _rememberMeSelector = 'nb-checkbox[name="rememberMe"]'
  _loginBtnSelector = 'button[fullwidth][status="primary"]'

  constructor() {
    super('auth/login')
  }

  fill(email, password, rememberMe){
    cy.get(this._emailInputSelector).type(email)
    cy.get(this._passwordInputSelector).type(password)

    if(rememberMe){
      cy.get(this._rememberMeSelector).click()
    }
  }

  clickLoginButton(){
    cy.get(this._loginBtnSelector).click()
  }
}
