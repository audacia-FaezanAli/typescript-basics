import {keyInSelect, question} from "readline-sync";
import { Post } from "./post";
import { User } from "./user";
import {initialQuestions, userCreationQuestions, updateUserQuestions, userActionQuestions, userPostQuestions} from "./questions"

let users:User[] = [];
let userId = 0;

function createUser(userAnswers:string[], userId:number): User {
    let firstName = userAnswers[0]
    let lastName = userAnswers[1]
    let userName = userAnswers[2]
    let dateOfBirth = userAnswers[3]
    console.log(`Thank You, ${firstName} ${lastName} your new account has been made`)
    return new User(firstName,lastName,userName,new Date(dateOfBirth),userId)
}

function updateUser(userIndex:number): number{
    let updateQuestionAnswer = askQuestions(updateUserQuestions);
    if (updateQuestionAnswer === 0) {
        let userUpdateInput = question(`Please enter new first name: \n`);
        users[userIndex].updateFirstName(userUpdateInput);
        return updateUser(userIndex);
    } else if (updateQuestionAnswer === 1) {
        let userUpdateInput = question(`Please enter new last name: \n`);
        users[userIndex].updateLastName(userUpdateInput);
        return updateUser(userIndex);
    } else if (updateQuestionAnswer === 2) {
        let userUpdateInput = question(`Please enter new username: \n`);
        users[userIndex].updateUserName(userUpdateInput);
        return updateUser(userIndex);
    } else if (updateQuestionAnswer === 3) {
        let userUpdateInput = question(`Please enter new date of birth (yyyy-mm-dd): \n`);
        users[userIndex].updateDateOfBirth(userUpdateInput);
        return updateUser(userIndex);
    } else if (updateQuestionAnswer === 4) {
        users[userIndex].display()
        return questionAnswerHandler();
    } 
    return questionAnswerHandler();
}

function deleteUser(users:User[], userNameToDelete:string): void{
    let userIndex = users.map(user => user.userName).indexOf(userNameToDelete)
    users.splice(userIndex, 1)
}

//  function for the logic of user actions e.g post, chat, photos
function userAction(userIndex:number): number {
    let userActionSelection = askQuestions(userActionQuestions)
    if (userActionSelection === 0) {
        postsInterface(userActionSelection, userIndex);
    } else if (userActionSelection === 1) {
        return userIndex;
    } else if (userActionSelection === 2) {
        return userIndex;
    } else if (userActionSelection === 3) {
        questionAnswerHandler();
    } else {
        return userAction(userIndex);
    }
    return userAction(userIndex);
}

// function for user post choices
function postsInterface(userActionSelection:number, userIndex:number): number {
    let userPostAnswer = askQuestions(userPostQuestions);
    let userPostsArray = users[userIndex].posts
    // create new post
    if (userPostAnswer === 0) {
        let newPost = createPost(users, userIndex)
        newPost.postId = userPostsArray.indexOf(newPost)
        userPostsArray.push(newPost)
    // Edit an existing post
    } else if (userPostAnswer === 1) {
        editPost(userPostsArray);
    // Delete a post
    } else if (userPostAnswer === 2) {
        deletePost(userPostsArray);
    // view all posts
    } else if (userPostAnswer === 3) {
        viewPosts(userPostsArray);
    // go back
    } else if (userPostAnswer === 4){
        userAction(userIndex)
    }
    return postsInterface(userActionSelection, userIndex);
}

function createPost(users:User[], userIndex:number): Post {
    let postUser = users[userIndex]
    let postContent = question("Enter post below: \n")
    return new Post(postUser, postContent, postUser.userId)
}

function editPost(userPostArray: Post[]):void {
    for (let index = 0; index < userPostArray.length; index++) {
        console.log(`[${index+1}] ${userPostArray[index].content}`);
    }
    let postIndexToEdit = +(question(`Choose a post to edit [1...${userPostArray.length}]: `)) -1;
    let editedPost = question("Enter post edit: \n");
    userPostArray[postIndexToEdit].content = editedPost;
}

function viewPosts(userPostArray: Post[]): void {
    for (let index = 0; index < userPostArray.length; index++) {
        userPostArray[index].displayPost();
    }
}

function deletePost(userPostArray: Post[]): void {
    for (let index = 0; index < userPostArray.length; index++) {
        console.log(`[${index+1}] ${userPostArray[index].content}`);
    }
    let postIndexToDelete = +(question(`Choose a post to delete [1...${userPostArray.length}]: `)) -1;
    userPostArray.splice(postIndexToDelete, 1)
}

// function to check if username exists and returns user index if it does
function userNameChecker(): number {
    let userName = question("Please enter username: ")
    let userIndex = users.map(user => user.userName).indexOf(userName)
    if (userIndex === -1) {
        console.log(`${userName} DOES NOT EXIST!`)
        return questionAnswerHandler();
    }
    return userIndex
}

// function to take input string array of user options/questions and return the index of the users chosen option
function askQuestions(questionList: string[]): number {
    let index = keyInSelect(questionList, "Choose an option", {cancel:false});
    // console.log(index)
    if (index!==-1) {console.log(`Ok let's ${questionList[index]}\n`)}
    return index;
}

function questionAnswerHandler(): number{
    let initialAnswer = askQuestions(initialQuestions)
    // console.log(initialAnswer)
    switch(initialAnswer) {
        // Log in to user for access to user actions
        case 0:
            let logInUserIndex = userNameChecker()
            userAction(logInUserIndex)
            return questionAnswerHandler();
        // create a new user
        case 1:
            let userCreationAnswers:string[] = [];
            for (let index = 0; index < userCreationQuestions.length; index++) {
                userCreationAnswers.push(question(userCreationQuestions[index]))
            }
            userId++;
            let user = createUser(userCreationAnswers, userId);
            users.push(user);
            return questionAnswerHandler();
        // update a users details
        case 2:
            let userIndexToUpdate = userNameChecker();
            updateUser(userIndexToUpdate);
            console.log(users);
            return questionAnswerHandler();
        // delete a user
        case 3:
            let deleteUserName = question("Please enter the username of the account you would like to delete: \n");
            deleteUser(users, deleteUserName);
            console.log("User has been deleted.");
            console.log(users);
            return questionAnswerHandler();
        // exit the app
        case 4:
            console.log("Goodbye");
            return initialAnswer;
        
        default:
            return questionAnswerHandler();
    }
}

questionAnswerHandler();