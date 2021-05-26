import loginPage  from '../pages/LoginPage'
import  productsPage  from '../pages/ProductsPage'
import  cartPage  from '../pages/CartPage'
import { URLS, CREDENTIALS } from '../pages/data/Constants'


fixture ('Navigate in products page')
    .page (`${URLS.LOGING_PAGE}`)
    .beforeEach(async t =>{
        await t
        .typeText(loginPage.usernameField, CREDENTIALS.CORRECT_USER.USERNAME, {paste:true})
        .typeText(loginPage.passwordField, CREDENTIALS.CORRECT_USER.PASSWORD, {paste:true})
        .click(loginPage.loginButton)
    })

    test ('User navigates to the shopping cart page', async t =>{
        await t.click(productsPage.buttonCart)

        await t.expect(cartPage.cartTitlePage.expect).ok
    })
    
    test ('User add a single item to the shopping cart', async t =>{
        await t
        .click(productsPage.buttonSort)
        .click(productsPage.buttonSortLohi)
        .click(productsPage.buttonAddToCart1)
    
        await t.expect(productsPage.buttonCartNumber.innerText).eql("1")
    })

    test ('User add multiple items to the shopping cart', async t =>{
        await t.click(productsPage.buttonSort)
        await t.click(productsPage.buttonSortLohi)
        await productsPage.addProducts()
        await t.click(productsPage.buttonCart)

        await t.expect(productsPage.buttonCartNumber.innerText).eql("3")
    })