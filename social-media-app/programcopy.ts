import {keyInSelect, question} from "readline-sync";
import { User } from "./user";

enum initialQuestions {
    "Create new user" = 100, 
    "Update existing user" = 200, 
    "Delete user" = 300,
    "Exit" = 400
}

// const initialQuestions: string[] = [
//     "Create new user", 
//     "Update existing user", 
//     "Delete user",
//     "Exit",];

const userCreationQuestions: string[] = [
    "Please enter your first name: ", 
    "Please enter your last name: ", 
    "Please enter a user name: ",
    "Please enter your date of birth (yyyy-mm-dd): "];

const updateQuestions: string [] = [
    "Update first name",
    "Update last name",
    "Update user name",
    "Update date of birth",
    "Go back"
];

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
            break;
        case 1:
            let newLastName = question(`Please enter new details: \n`);
            users[userIndex].updateLastName(newLastName);
            return updateQuestionAnswer
            break;
        case 2:
            let newUserName = question(`Please enter new details: \n`);
            users[userIndex].updateUserName(newUserName);
            return updateQuestionAnswer
            break;
        case 3:
            let newDateOfBirth = question(`Please enter new details: \n`);
            users[userIndex].updateDateOfBirth(newDateOfBirth);
            return updateQuestionAnswer
            break;
        case 4:
            return questionAnswerHandler()
            break;
    }
    return updateQuestionAnswer
}

function deleteUser(users:User[], userNameToDelete:string): void{
    let userIndex = users.map(user => user.userName).indexOf(userNameToDelete)
    users.splice(userIndex, 1)
}

function askQuestions(questionList: Enumerator): number {
    for (var enumMember in questionList) {
        var isValueProperty = Number(enumMember) >= 0
        if (isValueProperty) {
            console.log(questionList[enumMember]);
        }
    }
        
    }
    // let index = keyInSelect(questionList, "Choose an option", {cancel:false});
    // // console.log(index)
    // if (index!==-1) {console.log(`Ok let's ${questionList[index]}`)}
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
            console.log(users)
            return questionAnswerHandler();

        case 1:
            let userNameToUpdate = question("Please enter the username of the account you would like to update: \n");
            let userIndex = users.map(user => user.userName).indexOf(userNameToUpdate)
            if (userIndex === -1) {
                console.log(`${userNameToUpdate} DOES NOT EXIST!`);
                return questionAnswerHandler();
            } else {
                let updateQuestionAnswer = askQuestions(updateQuestions);
                updateUser(users, userIndex, updateQuestionAnswer);
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
            console.log("Goodbye");
            return initialAnswer
        
        default:
            return questionAnswerHandler()
    }
}

questionAnswerHandler();