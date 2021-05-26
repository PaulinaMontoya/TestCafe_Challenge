import { Selector } from 'testcafe'

class ProductsPage {
    constructor(){
        this.productsTitlePage  = Selector ('span[class="title"]')
        this.menuBurger  = Selector ('button[id="react-burger-menu-btn"]')
        this.linkLogout = Selector ('a[id="logout_sidebar_link"]')
        this.buttonSort = Selector ('select[class="product_sort_container"]')
        this.buttonAz = Selector ('option[value="az"]')
    }
}

export default new ProductsPage()
