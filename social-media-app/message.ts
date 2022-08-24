import { User } from "./user";
import { Post } from "./post";
import {Chat} from "./chat";
import { Photo } from "./photo";

export class Message {
    // fields
    message: string;
    userId: number;
    chatId: number;
    chat: Chat;
    person: User;

    // constructor
    constructor(message:string, senderUserId:number, chatId:number) {
        this.message = message;
        this.userId = senderUserId;
        this.chatId = chatId;
        // this.chat = 
    }

    // functions

}