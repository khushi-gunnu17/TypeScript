// keyof is a keyword in TypeScript which is used to extract the key type from an object type.




// keyof with explicit keys
// When used on an object type with explicit keys, keyof creates a union type with those keys.

interface Person {
    name : string
    age : number
}

// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed

function printPersonProperty(person : Person, property : keyof Person) {
    console.log(`Printing person property ${property}: "${person[property]}"`);
}

let khushi = {
    name : "Khushi",
    age : 20
}

printPersonProperty(khushi, "name")     // Printing person property name: "Khushi"










// keyof with index signatures
// keyof can also be used with index signatures to extract the index type.

type StringMap = {[key : string] : unknown}

// `keyof StringMap` resolves to `string` here
function createStringPair(property : keyof StringMap, value : string) : StringMap {
    return {[property] : value};
}

const result = createStringPair("name", "Gunnu")
const resultOne = createStringPair("nickName", "Khushi")
console.log(result);
console.log(resultOne);

// This function allows you to dynamically create key-value pairs in an object, with the key being a string and the value being a string, while still adhering to the StringMap type definition.



export {}