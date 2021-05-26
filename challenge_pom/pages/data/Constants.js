import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
    LOGING_PAGE: 'https://www.saucedemo.com/'
}

export const CREDENTIALS = {
    CORRECT_USER:{
        USERNAME: process.env.USERNAME,
        PASSWORD: process.env.PASSWORD

    },
    INCORRECT_USER:{
        USERNAME: process.env.INVALIDUSERNAME,
        PASSWORD: process.env.INVALIDPASSWORD
    }
}