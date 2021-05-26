import { Selector } from 'testcafe'

class checkoutOverview {
    constructor(){
        this.titleOverview = Selector ('span[class="title"]')
        this.buttonFinish = Selector ('button[id="finish"]')
    }
}

export default new checkoutOverview()