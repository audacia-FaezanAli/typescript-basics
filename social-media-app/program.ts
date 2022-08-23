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

function updateUser(users: User[], userIndex:number, updateQuestionAnswer:number): number{
    switch (updateQuestionAnswer) {
        case 0:
            let newFirstName = question(`Please enter new details: \n`);
            users[userIndex].updateFirstName(newFirstName);
            return updateQuestionAnswer;
        case 1:
            let newLastName = question(`Please enter new details: \n`);
            users[userIndex].updateLastName(newLastName);
            return updateQuestionAnswer;
        case 2:
            let newUserName = question(`Please enter new details: \n`);
            users[userIndex].updateUserName(newUserName);
            return updateQuestionAnswer;
        case 3:
            let newDateOfBirth = question(`Please enter new details: \n`);
            users[userIndex].updateDateOfBirth(newDateOfBirth);
            return updateQuestionAnswer;
        case 4:
            return questionAnswerHandler();
    }
    return updateQuestionAnswer;
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
        case 0:
            let logInUserName = question("Please enter your username: ")
            let logInUserIndex = users.map(user => user.userName).indexOf(logInUserName)
            if (logInUserIndex === -1) {
                console.log(`${logInUserName} DOES NOT EXIST!`)
                return questionAnswerHandler();
            } else {
                userAction(logInUserIndex);
            }
            return questionAnswerHandler();

        case 1:
            let userCreationAnswers:string[] = [];
            for (let index = 0; index < userCreationQuestions.length; index++) {
                userCreationAnswers.push(question(userCreationQuestions[index]))
            }
            userId++;
            let user = createUser(userCreationAnswers, userId);
            users.push(user);
            return questionAnswerHandler();

        case 2:
            let userNameToUpdate = question("Please enter the username of the account you would like to update: \n");
            let userIndexToUpdate = users.map(user => user.userName).indexOf(userNameToUpdate)
            if (userIndexToUpdate === -1) {
                console.log(`${userNameToUpdate} DOES NOT EXIST!`);
                return questionAnswerHandler();
            } else {
                let updateQuestionAnswer = askQuestions(updateUserQuestions);
                updateUser(users, userIndexToUpdate, updateQuestionAnswer);
                console.log(users);
                return questionAnswerHandler();
            }

        case 3:
            let deleteUserName = question("Please enter the username of the account you would like to delete: \n");
            deleteUser(users, deleteUserName);
            console.log("User has been deleted.");
            console.log(users);
            return questionAnswerHandler();

        case 4:
            console.log("Goodbye");
            return initialAnswer;
        
        default:
            return questionAnswerHandler()
    }
}

questionAnswerHandler();