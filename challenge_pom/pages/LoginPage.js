import { Selector } from 'testcafe'

class loginPage {
    constructor(){
        this.usernameField = Selector(`input[id="user-name"]`)
        this.passwordField = Selector('input[id="password"]')
        this.loginButton = Selector('input[id="login-button"]')
        this.errorMessage = Selector('h3[data-test="error"]')
        this.botImage = Selector ('div[class="bot_column"]')
    }
}

export default new loginPage()


