import {keyInSelect, question} from "readline-sync";
import { Post } from "./post";
import { User } from "./user";
import {initialQuestions, userCreationQuestions, updateUserQuestions} from "./questions"


// const initialQuestions: string[] = [
//     "Create new user", 
//     "Update existing user", 
//     "Delete user",
//     "Create new post",
//     "Exit",];

// const userCreationQuestions: string[] = [
//     "Please enter your first name: ", 
//     "Please enter your last name: ", 
//     "Please enter a user name: ",
//     "Please enter your date of birth (yyyy-mm-dd): "];

// const updateUserQuestions: string [] = [
//     "Update first name",
//     "Update last name",
//     "Update user name",
//     "Update date of birth",
//     "Go back"
// ];

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

function createPost(users:User[], userIndex:number): void {



}

function askQuestions(questionList: string[]): number {
    let index = keyInSelect(questionList, "Choose an option", {cancel:false});
    // console.log(index)
    if (index!==-1) {console.log(`Ok let's ${questionList[index]}`)}
    return index;
}

function questionAnswerHandler(): number{
    let initialAnswer = askQuestions(initialQuestions)
    // console.log(initialAnswer)
    switch(initialAnswer) {
        case 0:
            let userCreationAnswers:string[] = [];
            for (let index = 0; index < userCreationQuestions.length; index++) {
                userCreationAnswers.push(question(userCreationQuestions[index]))
            }
            userId++;
            let user = createUser(userCreationAnswers, userId);
            users.push(user);
            return questionAnswerHandler();

        case 1:
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
            break;

        case 2:
            let deleteUserName = question("Please enter the username of the account you would like to delete: \n");
            deleteUser(users, deleteUserName);
            console.log("User has been deleted.");
            console.log(users);
            return questionAnswerHandler();
            break;

        case 3:
            let userNameToPost = question("Please enter your username: ")
            let userIndexToPost = users.map(user => user.userName).indexOf(userNameToPost)
            if (userIndexToPost === -1) {
                console.log(`${userNameToPost} DOES NOT EXIST!`)
            }
            return questionAnswerHandler();

        case 4:
            console.log("Goodbye");
            return initialAnswer;
        
        default:
            return questionAnswerHandler()
    }
}

questionAnswerHandler();