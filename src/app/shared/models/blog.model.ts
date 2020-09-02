import {Chat} from './../interface/chat.interface'
export class IChat implements Chat {
    constructor(
    readonly id: number,
    public postedBy: string,
    public topic: string,
    public date: Date,
    public message: string
    ){}
}