import { Selector } from 'testcafe'

class cartPage {
    constructor(){
        this.cartTitlePage = Selector ('span[class="title"]')
        this.buttonCheckout = Selector ('button[id="checkout"]')
    }
}

export default new cartPage()