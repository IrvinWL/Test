import {Selector} from 'testcafe'

class WelcomePage{
 constructor(){
     this.btn_welcome=Selector('.btn-lg')
 }
}

export default new WelcomePage()
