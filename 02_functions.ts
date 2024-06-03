// In the case of functions type anotations is necessary, but in the case of variables it is not necessary.

function addTwo(num : number): number {
    // num.toUpperCase()
    return num + 2
    // return "hello"
}

let myValue = addTwo(7)
console.log(myValue);






function getUpper(val : string) {
    return val.toUpperCase()
}

console.log(getUpper("khushi"));





function signUpUser(name: string, email: string, password: number, isPaid: boolean) {}

signUpUser("Khushi", "khushi@gmail.com", 12345, true)



// default value in the function
let loginUser = (name: string, email: string, password: number, isPaid: boolean = false) => {}

loginUser("k", "k@k.com", 4567)




// function with more than one return type
function getValue(myVal : number) {
    if (myVal > 5) {
        return true
    }
    return "200 ok"
}





const getHello = (s: string): string => {
    return ""
}






const heroes = ['Thor', 'spiderman', 'ironman']
// const heroes = [1, 2, 3]

console.log(heroes.map((hero) : string => {
    return `hero is ${hero}.`
}))




function consoleError(errormsg : string): void {
    console.log(errormsg);
}



// never is specifically made so that you can handle the error 
function handleError(errormsg : string): never {
    // Throwing the error means this function will never reach the end and return.
    throw new Error(errormsg)
}

// try {
//     handleError("Name Error")
// } catch (error) {
//     console.log(error)
// }



export {}