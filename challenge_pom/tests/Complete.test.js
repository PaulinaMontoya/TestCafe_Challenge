import loginPage  from '../pages/LoginPage'
import  productsPage  from '../pages/ProductsPage'
import  cartPage  from '../pages/CartPage'
import  checkoutInformation  from '../pages/CheckoutInformationPage'
import  checkoutOverview  from '../pages/CheckoutOverviewPage'
import  checkoutComplete  from '../pages/CheckoutComplete'
import { URLS, CREDENTIALS } from '../pages/data/Constants'


fixture ('Final order items')
    .page (`${URLS.LOGING_PAGE}`)
    .beforeEach(async t =>{
        await t
        await t.typeText(loginPage.usernameField, CREDENTIALS.CORRECT_USER.USERNAME, {paste:true})
        await t.typeText(loginPage.passwordField, CREDENTIALS.CORRECT_USER.PASSWORD, {paste:true})
        await t.click(loginPage.loginButton)
        await productsPage.addProducts()
        await t.click(productsPage.buttonCart)
        await t.click(cartPage.buttonCheckout)
        await checkoutInformation.fillInformation(CREDENTIALS.CORRECT_USER.USERNAME)
    })


    /*
    test ('Validate items in overview page with added items', async t =>{

    })
    */
    
    test ('User navigate to the confirmation page', async t =>{
        await t.click(checkoutOverview.buttonFinish)
        await t.expect(checkoutComplete.completeTitle.exists).ok
    })