import { User } from "./user";
import { Post } from "./post";
import {Chat} from "./chat";
import { Photo } from "./photo";

export class Message {
    // fields
    message: string;
    sender: User;
    chatId: number;
    // // chat: Chat;
    // person: User;

    // constructor
    constructor(message:string, sender:User, chatId:number) {
        this.message = message;
        this.sender = sender;
        this.chatId = chatId;
        // this.chat = 
    }

    // functions

}