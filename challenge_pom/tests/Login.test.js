import loginPage  from '../pages/LoginPage'
import  productsPage  from '../pages/ProductsPage'
import { URLS, CREDENTIALS } from '../pages/data/Constants'

fixture ('Login feature test')
    .page (`${URLS.LOGING_PAGE}`)
    .only
    

test ('User loging successfully with standard user', async t =>{
    await loginPage.logingSuccess(CREDENTIALS.CORRECT_USER.USERNAME, CREDENTIALS.CORRECT_USER.PASSWORD)
    await t.expect(productsPage.productsTitlePage.exists).ok
})

test ('Invalid user login', async t =>{
    await t
    .typeText(loginPage.usernameField, CREDENTIALS.INCORRECT_USER.USERNAME, {paste:true})
    .typeText(loginPage.passwordField, CREDENTIALS.INCORRECT_USER.PASSWORD, {paste:true})
    .click(loginPage.loginButton)

    await t.expect(productsPage.ProductsPage).ok
})

test ('User logout successfully', async t =>{
    await loginPage.logingSuccess(null,null)
    await t.expect(loginPage.botImage.exists).ok
})