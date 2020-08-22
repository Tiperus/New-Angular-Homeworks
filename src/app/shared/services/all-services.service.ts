import { Injectable } from '@angular/core';
import{ PhoneBook } from './../models/phone.model';
import {MyPhoneBook} from './../interface/phone.interface'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AllServicesService {

  // private arrNumberPhone: Array<MyPhoneBook> = [];

  constructor(
    private http: HttpClient
  ) { }

  // getArr(): Array<PhoneBook>{
  //   return this.arrNumberPhone
  // }
  getArrPhoneNumber(): Observable <Array<MyPhoneBook>> {
    return this.http.get<Array<MyPhoneBook>>(environment.url)
  }
  addArrPhoneNumber(person: MyPhoneBook): Observable <Array<MyPhoneBook>> {
    return this.http.post<Array<MyPhoneBook>>(environment.url, person)
  }
  deleteArrPhoneNumber(id:number): Observable <Array<MyPhoneBook>> {
    return this.http.delete<Array<MyPhoneBook>>(`${environment.url}/${id}`)
  }
  putArrPhoneNumber(person: MyPhoneBook): Observable <Array<MyPhoneBook>> {
    return this.http.put<Array<MyPhoneBook>>(`${environment.url}/${person.id}`, person)
  }
}
