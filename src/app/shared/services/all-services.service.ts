import { Injectable } from '@angular/core';
import {MyPhoneBook} from './../interface/phone.interface'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Chat} from './../interface/chat.interface';
import {ChatUser} from './../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AllServicesService {

  constructor(
    private http: HttpClient
  ) { }


  getArrPhoneNumber(): Observable <Array<MyPhoneBook>> {
    return this.http.get<Array<MyPhoneBook>>(`${environment.url}/${'dataPhone'}`)
  }
  addArrPhoneNumber(person: MyPhoneBook): Observable <Array<MyPhoneBook>> {
    return this.http.post<Array<MyPhoneBook>>(`${environment.url}/${'dataPhone'}`, person)
  }
  deleteArrPhoneNumber(id:number): Observable <Array<MyPhoneBook>> {
    return this.http.delete<Array<MyPhoneBook>>(`${environment.url}/${'dataPhone'}/${id}`)
  }
  putArrPhoneNumber(person: MyPhoneBook): Observable <Array<MyPhoneBook>> {
    return this.http.put<Array<MyPhoneBook>>(`${environment.url}/${'dataPhone'}/${person.id}`, person)
  }
  isLogin():boolean{
    return true;
  }
  getArrUsers(): Observable <Array<ChatUser>> {
    return this.http.get<Array<ChatUser>>(`${environment.url}/${'dataUsers'}`)
  }
  addArrUser(person: ChatUser): Observable <Array<ChatUser>> {
    return this.http.post<Array<ChatUser>>(`${environment.url}/${'dataUsers'}`, person)
  }
  deleteArrUser(id:number): Observable <Array<ChatUser>> {
    return this.http.delete<Array<ChatUser>>(`${environment.url}/${'dataUsers'}/${id}`)
  }
  editArrUsers(person: ChatUser): Observable <Array<ChatUser>> {
    return this.http.put<Array<ChatUser>>(`${environment.url}/${'dataUsers'}/${person.id}`, person)
  }

  getArrChat(): Observable <Array<Chat>> {
    return this.http.get<Array<Chat>>(`${environment.url}/${'chat'}`)
  }
  addArrChat(message: Chat): Observable <Array<Chat>> {
    return this.http.post<Array<Chat>>(`${environment.url}/${'chat'}`, message)
  }
  deleteArrChat(id:number): Observable <Array<Chat>> {
    return this.http.delete<Array<Chat>>(`${environment.url}/${'chat'}/${id}`)
  }
  editArrChat(messege: Chat): Observable <Array<Chat>> {
    return this.http.put<Array<Chat>>(`${environment.url}/${'chat'}/${messege.id}`, messege)
  }

}
