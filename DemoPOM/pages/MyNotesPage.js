import {Selector} from 'testcafe'

class MyNotesPage{
 constructor(){
     this.lbl_MyNotes=Selector('#my-notes-page > h2')
 }
}

export default new MyNotesPage()
