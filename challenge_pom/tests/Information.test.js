import loginPage  from '../pages/LoginPage'
import  productsPage  from '../pages/ProductsPage'
import  cartPage  from '../pages/CartPage'
import  checkoutInformation  from '../pages/CheckoutInformationPage'
import  checkoutOverview  from '../pages/CheckoutOverviewPage'
import { URLS, CREDENTIALS } from '../pages/data/Constants'

fixture ('Checkout your information page')
    .page (`${URLS.LOGING_PAGE}`)
    .beforeEach(async t =>{
        await t.typeText(loginPage.usernameField, CREDENTIALS.CORRECT_USER.USERNAME, {paste:true})
        await t.typeText(loginPage.passwordField, CREDENTIALS.CORRECT_USER.PASSWORD, {paste:true})
        await t.click(loginPage.loginButton)
        await productsPage.addProducts()
        await t.click(productsPage.buttonCart)
        await t .click(cartPage.buttonCheckout)
    })

    test ('Error message of Missing Postal Code information', async t =>{
        await checkoutInformation.nullInformation(CREDENTIALS.CORRECT_USER.USERNAME)
        await t.expect(checkoutInformation.errorMessage.innerText).eql("Error: Postal Code is required")
    })

    test ('User navigates to the overview page', async t =>{
        await checkoutInformation.fillInformation(CREDENTIALS.CORRECT_USER.USERNAME)
        await t.expect(checkoutOverview.titleOverview.exists).ok
    })