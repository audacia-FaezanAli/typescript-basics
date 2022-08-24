import { User } from "./user";
import { Post } from "./post";
import { Message } from "./message";
import { Photo } from "./photo";

export class Chat {
    // fields
    chatId: number;
    users: User[];
    messages: Message[];
    userId: number;

    // constructor
    constructor(chatParticipants: User[], chatOwnerUserId:number) {
        this.chatId = 0;
        this.users = chatParticipants;
        this.messages = [];
        this.userId = chatOwnerUserId;
    }

    // functions
    displayChat(): void {
        console.log("ChatID: "+this.chatId);
        console.log("Chat Owner: "+ this.userId);
        console.log("Chat Participants: "+this.users.forEach(user => {user.userName}))
        console.log("Messages: " + this.messages);
    }
}