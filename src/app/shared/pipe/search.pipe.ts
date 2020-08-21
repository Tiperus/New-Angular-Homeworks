import { Pipe, PipeTransform } from '@angular/core';
import{PhoneBook} from './../models/phone.model'

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(user: Array<PhoneBook>, lastName: string): unknown {
    if(!lastName){return user}
    if(!user){return []}
    return user.filter(user => user.lastName.toLowerCase().includes(lastName.toLowerCase()))
  }

}
