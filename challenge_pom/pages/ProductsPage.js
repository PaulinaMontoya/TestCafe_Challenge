import { Selector, t } from 'testcafe'

class ProductsPage {
    constructor(){
        this.productsTitlePage  = Selector ('span[class="title"]')
        this.menuBurger  = Selector ('button[id="react-burger-menu-btn"]')
        this.linkLogout = Selector ('a[id="logout_sidebar_link"]')
        this.buttonSort = Selector ('select[class="product_sort_container"]')
        this.buttonSortLohi = Selector ('option[value="lohi"]')
        this.buttonCart = Selector ('div[class="shopping_cart_container"]')
        this.buttonAddToCart1 = Selector ('button[name="add-to-cart-sauce-labs-onesie"]')
        this.buttonAddToCart2 = Selector ('button[name="add-to-cart-sauce-labs-bike-light"]')
        this.buttonAddToCart3 = Selector ('button[name="add-to-cart-sauce-labs-bolt-t-shirt"]')
        this.buttonCartNumber = Selector ('span[class="shopping_cart_badge"]')
    }

    async addProducts(){
        await t.click(this.buttonAddToCart1)
        await t.click(this.buttonAddToCart2)
        await t.click(this.buttonAddToCart3)
    }
}

export default new ProductsPage()