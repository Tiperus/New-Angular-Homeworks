import { Component, OnInit } from '@angular/core';
import {MyPhoneBook} from './../../shared/interface/phone.interface';
import {PhoneBook} from './../../shared/models/phone.model';
import {AllServicesService} from './../../shared/services/all-services.service';


// const   myDataPhone: Array<PhoneBook> = [];

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.scss']
})
export class PhonebookComponent implements OnInit {
  myDataPhone: Array<MyPhoneBook>=[];
  person: MyPhoneBook;
  noteFirstName:string;
  noteLastName:string;
  notePhone:number;
  statusData:boolean=false;
  indexVariable:number;
  idVariable:number;


  constructor(
    private _phoneNumber: AllServicesService
  ) {

   }

  ngOnInit(): void {
    this.getPhoneData()
  }
  getPhoneData(): void {
    this._phoneNumber.getArrPhoneNumber().subscribe(data => {
      this.myDataPhone=data;
    })
  }
  addPersonToServis(person:MyPhoneBook):void{
    this._phoneNumber.addArrPhoneNumber(person).subscribe(data => {
      // console.log(data);
      // this.myDataPhone=data;
    })
  }
  deletePersonOnServis(index:number):void{
    this._phoneNumber.deleteArrPhoneNumber(index).subscribe()
  }
  editPersonOnServws(person:MyPhoneBook):void{
    console.log(person)
    this._phoneNumber.putArrPhoneNumber(person).subscribe(()=>{})
  }
 
  
  addNewPhone():void{
    let newPhone:MyPhoneBook= new PhoneBook(1, this.noteFirstName, this.noteLastName, this.notePhone);
    if(this.myDataPhone.length>0){
      newPhone.id=this.myDataPhone.slice(-1)[0].id+1;
    }
    // this.person=newPhone;
    this.addPersonToServis(newPhone);
    this.myDataPhone.push(newPhone);
    this.noteFirstName='';
    this.noteLastName='';
    this.notePhone=0;
    
  }
  deletePhone(index:number, id:number):void{
    this.myDataPhone.splice(index,1);
    this.deletePersonOnServis(id);
  }
  editPhone(index:number, record:MyPhoneBook):void{
 this.statusData=true;
 this.indexVariable=index;
//  console.log(record)
 this.idVariable=record.id;
 this.noteFirstName=this.myDataPhone[index].firstName;
 this.noteLastName=this.myDataPhone[index].lastName;
 this.notePhone=this.myDataPhone[index].phoneNumber;
 this.person=record;
 
//  console.log(this.person)
//  console.log(this.indexVariable)
  }
  saveEdit():void{
    // console.log(this.indexVariable)
    // console.log(this.noteFirstName)
    // console.log(this.myDataPhone)
    this.myDataPhone[this.indexVariable].firstName=this.noteFirstName;
    this.myDataPhone[this.indexVariable].lastName=this.noteLastName;
    this.myDataPhone[this.indexVariable].phoneNumber=this.notePhone;
    // console.log(this.person)
    this.editPersonOnServws(this.person)
    this.statusData=false;
    this.noteFirstName='';
    this.noteLastName='';
    this.notePhone=null;


  }

}
