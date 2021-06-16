import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
    LOGIN_PAGE:'http://testapp.galenframework.com/'
}

export const CREDENTIALS = {
    VALID_USER:{
        USERNAME:process.env.USERNAME,
        PASSWORD:process.env.PASSWORD
    },
    INVALID_USER:{
        USERNAME:'rewtret',
        PASSWORD:'retretrt'
    }
}

export const ERROR_MESSAGES = {
    ERROR_WRONG_CREDENTIALS_LOGIN:'The username or password are incorrect' 
}

export const LABELS = {
    MY_NOTES:'My Notes' 
}