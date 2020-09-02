import { Component, OnInit, TemplateRef } from '@angular/core';
import {AllServicesService} from './../../shared/services/all-services.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {User} from './../../shared/models/user.model';
import {ChatUser} from './../../shared/interface/user.interface';
import {Chat} from './../../shared/interface/chat.interface';
import {IChat} from './../../shared/models/blog.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  userData: Array<ChatUser> =[];
  chatContent: Array<Chat>=[]
  subscription: Subscription;
  name: string;
  email: string;
  password: string;
  nameValid: boolean=false;
  nameLoginValid: boolean=true;
  passwordLoginValid: boolean=true;
  loginStatusUser: boolean=false;
  activeUser: ChatUser;
  loginName:string;
  loginPassword:string;
  myTitle:string;
  myMessege:string;
  postDate:Date;
  canChatEditDelete: boolean =true;
  statusAddEditChat:boolean=false;
  actualPost: Chat;
  actualPostIndex: number;

  modalRef: BsModalRef;

  public singInForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^[A-Z][a-z]+$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('')])
  })
  public loginForm = new FormGroup({
    loginName: new FormControl('', [Validators.required, Validators.pattern('^[A-Z][a-z]+$')]),
    loginPassword: new FormControl('', [Validators.required, Validators.pattern('')])
  })
  public chatMessege = new FormGroup ({
    title: new FormControl('', [Validators.required]),
    messege: new FormControl('', [Validators.required])
  })
  public singAdmin = new FormGroup ({
    adminName: new FormControl('', [Validators.required, Validators.pattern('Admin')]),
    adminPassword: new FormControl('', [Validators.required,Validators.pattern('Admin')])
  })
  constructor(
    private _userChat: AllServicesService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.getUserData()
  }
  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  getUserData(){
    this.subscription=this._userChat.getArrUsers().subscribe(data =>{
      this.userData=data;
  
    })
  }
  addUser(person: ChatUser){
    this.subscription=this._userChat.addArrUser(person).subscribe(()=>{})
  }
  checkName(singInForm: any):boolean{
 
    return this.nameValid=this.userData.some((item:ChatUser,  index:number, arr: Array<ChatUser>)=>arr[index].username===singInForm.value.name)
  
  }
  // userNameValidator(control: FormControl): {[s:string]:boolean}{
  //       //  console.log(control)
  //        console.log(this.userData)
  //   if(this.userData.some((item:ChatUser,  index:number, arr: Array<ChatUser>)=>arr[index].username===control.value)){
  //       return {"name": true};
  //   }
  //   return null;
  // }
  // refresh():void{
  //   console.log(this.nameValid)
  // }
  singIn(singInForm: any):void{
     
    let user:ChatUser  = new User (1, singInForm.value.name, singInForm.value.email, singInForm.value.password);
    if(this.userData.length>0){
      user.id=this.userData.slice(-1)[0].id+1;
    }
    this.addUser(user);
    this.userData.push(user);
    this.name='';
    this.email='';
    this.password='';
  }
  clear():void{
    this.name='';
    this.email='';
    this.password='';
  }



  // ________________________________loginForm



  checkLoginName(loginForm:any):boolean{
      return this.nameLoginValid=this.userData.some(item=>item.username===loginForm.value.loginName)
  }
  checkLoginPassword(loginForm:any):boolean{
    this.activeUser=this.userData.find(item=>item.username===loginForm.value.loginName)
    if(loginForm.value.loginPassword===this.activeUser.password)
    return this.passwordLoginValid=true
    else  return this.passwordLoginValid=false;
  }
  openChat(loginForm:any):void{
    if(this.nameLoginValid=true&&this.passwordLoginValid){
      this.getChat();
      this.loginStatusUser=true;
    }
  }
    
  posibleEditDeletChat(name:string):boolean {
    if(this.activeUser.username===name) return false
    return true
  }


  getChat(){
    this.subscription=this._userChat.getArrChat().subscribe(data =>{
      this.chatContent=data;})
  }


  // _______________________________chatMessege

  addMessege(chatMessege:any):void{
    let messege:Chat  = new IChat (1, this.activeUser.username, chatMessege.value.title, this.getDate(), chatMessege.value.messege);
    if(this.chatContent.length>0){
      messege.id=this.chatContent.slice(-1)[0].id+1;
    }
      this.addMessegeToArr(messege);
      this.chatContent.push(messege);
      this.myTitle='';
      this.myMessege='';    
  }
  
  getDate():Date {
    return this.postDate = new Date()
  }
  addMessegeToArr(messege: Chat):void{
    this.subscription=this._userChat.addArrChat(messege).subscribe(()=>{})
  }

  deleteMassegefromArr(messege: Chat):void{
    this._userChat.deleteArrChat(messege.id).subscribe(()=>{})
    this.chatContent.splice(messege.id,1)
    this.getChat()
  }
  editMessegefromArr(messege: Chat, template,index):void{
    this.statusAddEditChat=true;
    this.openModal(template);
    this.myTitle=messege.topic;
    this.myMessege=messege.message;
    this.actualPost=messege;
    this.actualPostIndex=index;
  }

  saveEditMessege(chatMessege:any):void{
    this.actualPost.topic=chatMessege.value.title;
    this.actualPost.message=chatMessege.value.messege;
    this.chatContent.splice(this.actualPostIndex, 1, this.actualPost);
    this._userChat.editArrChat(this.actualPost).subscribe(()=>{})
    this.myTitle='';
    this.myMessege='';
    this.statusAddEditChat=false;
  }
// ____________________SIngAdmin?

openAdmin(singAdmin:any):void{
  console.log(singAdmin.valid)
  // let x=false;
  // if(singAdmin.valid) x=true;
  // this._userChat.isLogin(x);
  // this._userChat.isLogin(false);
}

}
