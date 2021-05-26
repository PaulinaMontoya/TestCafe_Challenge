import { Selector, t } from 'testcafe'

class checkoutInformation {
    constructor(){
        this.firstName = Selector ('input[id="first-name"]')
        this.lastName = Selector ('input[id="last-name"]')
        this.postalCode = Selector ('input[id="postal-code"]')
        this.errorMessage = Selector ('h3[data-test="error"]')
        this.buttonContinue = Selector ('input[id="continue"]')
    }

    async fillInformation(username)  {
        await t.typeText(this.firstName, username, {paste:true})
        await t.typeText(this.lastName, username, {paste:true})
        await t.typeText(this.postalCode, username, {paste:true})
        await t.click(this.buttonContinue)
    }

    async nullInformation(username)  {
        await t.typeText(this.firstName, username, {paste:true})
        await t.typeText(this.lastName, username, {paste:true})

        if (null){
        await t.typeText(this.postalCode, null, {paste:true})
        }
        
        await t.click(this.buttonContinue)
    }
}

export default new checkoutInformation()