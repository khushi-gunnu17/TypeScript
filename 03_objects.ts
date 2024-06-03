const user = {
    name : "Khushi",
    email : "khushi@gmail.com",
    isActive : true 
}




// excess property checking in function and not variable particularly
function createUser({name, isPaid} : {name : string, isPaid : boolean}) {}

// createUser({name : "Khushi", isPaid : false, email : "Khushi@gmail.com"})
createUser({name : "Khushi", isPaid : false})



// odd behaviour, here you can pass one more options into the calling function
function createNewUser({name, isPaid} : {name : string, isPaid : boolean}) {}

let newUser = {name : "Khushi", isPaid : false, email : "Khushi@gmail.com"}

createNewUser(newUser)






function createCourse(): {name : string, price : number} {
    return {name : "Python", price : 10000}
}





type User = {
    name : string;
    email : string;
    isActive : boolean;
}


// you can use MyString as a string type now anywhere in the code
type MyString = string


function getUser(user : User): User {
    return {name : "", email : "", isActive : true}
}

getUser({name : "", email : "", isActive : true})











type NewUser = {
    readonly _id : string;          // readonly = so no one can manipulate the data
    name : string;
    email : string;
    isActive : boolean;
    creditCardDetails ? : number;       // ? = optional 
}


let myUser : NewUser = {
    _id : "12345abc",
    name : "Khushi",
    email : "khushi@k.com",
    isActive : false
}


myUser.email = "khushi@gmail.com"
// myUser._id = "92dhv"        // cannot access it as it is readonly




type cardNumber = {
    cardNumber : string
}

type cardDate = {
    cardDate : string
}

type cardDetails = cardNumber & cardDate & {
    cvv : number
}





export {}