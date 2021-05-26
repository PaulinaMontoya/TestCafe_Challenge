import { Selector, t } from 'testcafe'

class loginPage {
    constructor(){
        this.usernameField = Selector ('input[id="user-name"]')
        this.passwordField = Selector ('input[id="password"]')
        this.loginButton = Selector ('input[id="login-button"]')
        this.errorMessage = Selector ('h3[data-test="error"]')
        this.botImage = Selector ('div[class="bot_column"]')
    }

    async logingSuccess(username, password ){

        if (username != null) {
            await t.typeText(this.usernameField, username, {paste:true})

        }
        if (password != null){
            await t.typeText(this.passwordField, password, {paste:true})
        }
        await t.click(this.loginButton)
    }
}

export default new loginPage()