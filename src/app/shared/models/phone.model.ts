import { MyPhoneBook } from "../interface/phone.interface";

export class PhoneBook implements MyPhoneBook {
constructor(
    public id:number,
    public firstName: string,
    public lastName: string,
    public phoneNumber:number
){}
} 