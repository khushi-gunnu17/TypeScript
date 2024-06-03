const score : Array<number> = []
const names : Array<string> = []


function IdentityOne (value : boolean | number) : boolean | number {
    return value
}

// any should not be used much as it doesn't provide any type safety 
function IdentityTwo (val : any) : any {
    return val
}




// Generics = enables developers to write reusable and type-safe code
// now this function can be either used for number, string or any data type 
function IdentityThree<Type> (args : Type) : Type {
    return args
}

// a number will be returned as an output
IdentityThree(3)

// a string will be returned as a output
IdentityThree("6")

// a boolean will be returned as a output here
IdentityThree(true)








// T here, needs to be referenced with the same word or letter
function IdentityFour<T> (val : T) : T {
    return val
}

interface Bottle {
    brand : string
    type : number
}

IdentityFour<Bottle> ({brand : "Milton", type : 123}) 











// generics in array

function getSearchProducts<T> (products : T[]) : T {
    // doing some database operations
    const myIndex = 3
    return products[myIndex]
}

// generics in arrow function;  <T,> = generic tag
const getMoreSearchProdcts = <T,> (products : T[]): T => {
    // doing some database operations
    const myIndex = 4
    return products[myIndex]
} 

// normal data type in array 
const getProducts = (products : number[]): number => {
    // doing some database operations
    const myIndex = 4
    return products[myIndex]
} 





export {}