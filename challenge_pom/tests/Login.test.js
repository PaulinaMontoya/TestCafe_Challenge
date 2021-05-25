import loginPage  from '../pages/LoginPage'
import  productsPage  from '../pages/ProductsPage'


fixture `Login feature test`
    .page `https://www.saucedemo.com/`


test ('User loging successfully with standard user', async t =>{
    await t
    .typeText(loginPage.usernameField, 'standard_user', {paste:true})
    .typeText(loginPage.passwordField, 'secret_sauce', {paste:true})
    .click(loginPage.loginButton)

    await t.expect(productsPage.ProductsPage).ok
})

test ('Invalid user login', async t =>{
    await t
    .typeText(loginPage.usernameField, 'invalid_user', {paste:true})
    .typeText(loginPage.passwordField, 'secret_sauce', {paste:true})
    .click(loginPage.loginButton)

    await t.expect(productsPage.ProductsPage).ok
})

test ('User logout successfully', async t =>{
    await t
    .typeText(loginPage.usernameField, 'standard_user', {paste:true})
    .typeText(loginPage.passwordField, 'secret_sauce', {paste:true})
    .click(loginPage.loginButton)
    .click(productsPage.menuBurger)
    .click(productsPage.linkLogout)

    await t.expect(loginPage.botImage.exists).ok()
})