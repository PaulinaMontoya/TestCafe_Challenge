import { Selector } from 'testcafe'

class checkoutComplete {
    constructor(){
        this.completeTitle = Selector ('span[class="title"]')
    }
}

export default new checkoutComplete()