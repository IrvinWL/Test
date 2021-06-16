import {Selector} from 'testcafe'
import welcomePage from '../pages/WelcomePage'
import loginPage from '../pages/LoginPage'
import myNotesPage from '../pages/MyNotesPage'
import {URLS, CREDENTIALS, ERROR_MESSAGES, LABELS} from '../data/Constants'
import { t } from 'testcafe'

fixture('Login fueature test')
    .page(`${URLS.LOGIN_PAGE}`)
    .beforeEach(async t => {
        await t
        .click(welcomePage.btn_welcome)
    })

test('User can login using valid credentials', async t => { 
    
    console.log(CREDENTIALS.VALID_USER.USERNAME)
    await loginPage.submitLoginForm(`${CREDENTIALS.VALID_USER.USERNAME}`,`${CREDENTIALS.VALID_USER.PASSWORD}`)
     //   await t
       //     .typeText(loginPage.tf_username,`${CREDENTIALS.VALID_USER.USERNAME}`,{paste:true})
         //   .typeText(loginPage.tf_password,`${CREDENTIALS.VALID_USER.PASSWORD}`,{paste:true})
           // .click(loginPage.btn_login)

           // await t.expect(myNotesPage.lbl_MyNotes.exists).ok
           await t.expect(myNotesPage.lbl_MyNotes.innerText).contains(LABELS.MY_NOTES)
})
test('User can not ligin using incorrect credenrials', async t => {
        //await t
       // .typeText(loginPage.tf_username,`${CREDENTIALS.INVALID_USER.USERNAME}`,{paste:true})
       // .typeText(loginPage.tf_password,`${CREDENTIALS.INVALID_USER.PASSWORD}`,{paste:true})
       // .click(loginPage.btn_login)
        await loginPage.submitLoginForm(`${CREDENTIALS.INVALID_USER.USERNAME}`,`${CREDENTIALS.INVALID_USER.PASSWORD}`)
      //  await t.expect(loginPage.lbl_errorMessage.exists).ok   
        ///await t.expect(loginPage.lbl_errorMessage.innerText).eql(`${ERROR_MESSAGES.ERROR_WRONG_CREDENTIALS_LOGIN}`)
        await t.expect(loginPage.lbl_errorMessage.innerText).eql(`${ERROR_MESSAGES.ERROR_WRONG_CREDENTIALS_LOGIN}`)
        
} )

test('Login without typing anything', async t => {
    await loginPage.submitLoginForm(null,null)
    await t.expect(loginPage.lbl_errorMessage.innerText).eql(ERROR_MESSAGES.ERROR_WRONG_CREDENTIALS_LOGIN)
})