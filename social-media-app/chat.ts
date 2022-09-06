import { User } from "./user";
import { Post } from "./post";
import { Message } from "./message";
import { Photo } from "./photo";

export class Chat {
    // fields
    messageId: number
    chatId: number;
    usersIds: number[];
    messages: Message[];
    ownerUserId: number;
    userNames: string[];

    // constructor
    constructor(chatParticipants: number[], chatOwnerUserId:number, chatUserNames:string[]) {
        this.chatId = 0;
        this.usersIds = chatParticipants;
        this.messages = [];
        this.ownerUserId = chatOwnerUserId;
        this.userNames = chatUserNames
        this.messageId = 0
    }

    // functions
    displayChat(): void {
        console.log('ChatID: '+this.chatId);;
        console.log(...this.userNames)
        // this.userNames.forEach(userName => {console.log(userName)})
        console.log('Messages: ');
        this.messages.forEach(Message => {
            if (Message !== undefined) {
                console.log(Message.sender.userName +': ' +Message.message)}
            })
        }}
        console.log('')