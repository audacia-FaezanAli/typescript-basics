import { Post } from "./post";
import {Chat} from "./chat";
import { Message } from "./message";
import { Photo } from "./photo";

import {question} from "readline-sync";

export class User {
    // fields
    userId: number;
    firstName: string;
    lastName: string;
    userName: string;
    dateOfBirth: number | Date;
    createdAt: Date;
    // profilePhotoId: number;
    // backgroundPhotoId: number;
    posts: Post[];
    chats: Chat[];
    messages: Message[];
    // profilePhoto: Photo;
    // backgroundPhoto: Photo;

    // constructor
    constructor(firstNameInput:string, lastNameInput:string, userNameInput:string, dateOfBirthInput:Date, userId:number, createdAt:Date = new Date()) {
        this.firstName = firstNameInput;
        this.lastName = lastNameInput;
        this.userName = userNameInput;
        this.dateOfBirth = dateOfBirthInput;
        this.createdAt = new Date();
        this.userId = userId;        
        this.posts = [];
        this.chats = [];
        this.messages = [];
        // this.profilePhotoId;
        // this.backgroundPhotoId;
        // this.profilePhoto = new Photo();
        // this.backgroundPhoto = new Photo();
    }

    // functions
    display(): void {
        console.log("First name: "+this.firstName);
        console.log("Last name: "+this.lastName);
        console.log("Username: "+this.userName);
        console.log("Date of birth: "+this.dateOfBirth);
        console.log("User ID: "+this.userId)
    }

    updateFirstName(input: string) {
        this.firstName = input
    }

    updateLastName(input: string) {
        this.lastName = input
    }

    updateUserName(input: string) {
        this.userName = input
    }

    updateDateOfBirth(input: string) {
        this.dateOfBirth = new Date(input)
    }

    addChat(input: Chat) {
        this.chats.push(input)
    }

    getUserName(): string{
        return this.userName
    }

}



