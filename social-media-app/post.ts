import { User } from "./user"; 
import {Chat} from "./chat"; 
import { Message } from "./message"; 
import { Photo } from "./photo";

interface IPost {
    content: string;
    dateCreated: Date;
    user: User
}

export class Post implements IPost {
    // fields
    userId: number;
    postId: number;
    user: User;
    content: string;
    dateCreated: Date;
    photos: Photo[];
    replies: Post[];

    // constructor
    constructor(inputUser:User, contentInput:string, userId:number, dateCreated:Date = new Date()) {
        this.user = inputUser;
        this.content = contentInput;
        this.dateCreated = new Date();
        this.userId = userId;
        this.photos = [];
        this.replies = [];
        this.postId = 0;
    }

    // functions
    displayPost(): void{
        console.log("Username: "+this.user.userName);
        console.log("Date: "+this.dateCreated);
        console.log("PostId: "+this.postId)
        console.log("Post: "+this.content);
        if (this.replies.length === 0 || this.replies == undefined) {
            console.log("No replies \n");
        } else {
            console.log("Replies: "+(this.replies.forEach(reply => console.log(reply))));
        }
    }
}

// export class BookmarkedPost implements IPost {
//     // fields
//     content: string;
//     dateCreated: Date;
//     user: User;

// }

// export class LikedPost implements IPost {
//     // fields
//     content: string;
//     dateCreated: Date;
//     user: User;

// }

// let post: Post = new Post ()
// post.user.firstName;