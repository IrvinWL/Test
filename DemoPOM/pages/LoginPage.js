import {Selector, t} from 'testcafe'

class LoginPage{
 constructor(){
     this.tf_username=Selector('.form-control[name="login.username"]')
     this.tf_password=Selector('.form-control[name="login.password"]')
     this.btn_login=Selector('.btn').withExactText('Login')
     this.btn_cancel=Selector('.button-cancel')
     this.lbl_errorMessage=Selector('#login-error-message')
    
 }

 async submitLoginForm(username, password){
     if(username!=null){
        await t.typeText(this.tf_username,username,{paste:true})
     }
     if(password!=null){
        await t.typeText(this.tf_password,password,{paste:true})
     }
    await t.click(this.btn_login)
 }
}

export default new LoginPage()
