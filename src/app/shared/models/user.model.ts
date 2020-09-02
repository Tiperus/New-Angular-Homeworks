import {ChatUser} from './../interface/user.interface'

export class User implements ChatUser {
    constructor(
    readonly id: number,
    public username: string,
    public email: string,
    public password: string
    ){}
    
}