import { Selector } from 'testcafe'

class ProductsPage {
    constructor(){
        this.productsTitlePage  = Selector('span[class="title"]')
        this.menuBurger  = Selector('button[id="react-burger-menu-btn"]')
        this.linkLogout = Selector ('a[id="logout_sidebar_link"]')
    }
}

export default new ProductsPage()
