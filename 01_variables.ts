// string

let greetings : string = "Hello Khushi"

let myNum : number = 7
// nyNum.toUpperCase()

greetings.toLowerCase()
console.log(greetings);




// number - contains all the int and float in js

// not a good practice
// let userId : number = 76558.08


let userId = 2345.67        // type inference
// userId = "Khushi"        // cannot assign string now to it after assigning a number
console.log(userId.toPrecision(4));





// boolean 

let isLoggedIn : boolean = false
console.log(isLoggedIn.valueOf())




// any

// let hero;
let hero : string; 

function getHero() {
    return "Thor"
}

hero = getHero()

console.log(hero);





export {}