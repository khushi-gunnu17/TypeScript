// By default null and undefined handling is disabled, and can be enabled by setting strictNullChecks to true.

// The rest of this page applies for when strictNullChecks is enabled.





// null and undefined are primitive types and can be used like other types, such as string.

let value : string | undefined | null = null
value = 'hello'
value = undefined
// value = null

console.log(value);


// When strictNullChecks is enabled, TypeScript requires values to be set unless undefined is explicitly added to the type.










// Optional Chaining
// Optional Chaining is a JavaScript feature that works well with TypeScript's null handling. It allows accessing properties on an object, that may or may not exist, with a compact syntax. It can be used with the ?. operator when accessing properties.


interface House {
    sqft : number
    yard? : {
        sqft : number
    }
}

function privateYardSize(house : House) {
    const yardSize = house.yard?.sqft

    if (yardSize === undefined) {
        console.log('No yard');
    } else {
        console.log(`Yard is ${yardSize} sqft`);
    }
}

let home : House = {
    sqft : 500,
    yard : {
        sqft : 100
    }
}

privateYardSize(home)

console.log();











// Nullish Coalescence
// Nullish Coalescence is another JavaScript feature that also works well with TypeScript's null handling. It allows writing expressions that have a fallback specifically when dealing with null or undefined. This is useful when other falsy values can occur in the expression but are still valid. It can be used with the ?? operator in an expression, similar to using the && operator.


function printMileage(mileage : number | null | undefined) {
    console.log(`Mileage : ${mileage ?? 'Not Available'}`)
}

printMileage(null)
printMileage(120)

console.log();













// Null Assertion
// TypeScript's inference system isn't perfect, there are times when it makes sense to ignore a value's possibility of being null or undefined. An easy way to do this is to use casting, but TypeScript also provides the ! operator as a convenient shortcut.

function getValue() : string | undefined {
    return 'khushi'
}

let valueObtained = getValue();
console.log('Value length : ' + valueObtained!.length);

console.log();

// The ! operator is used to assert that valueObtained is not null or undefined. This tells TypeScript that the value is definitely not undefined at this point.

// Just like casting, this can be unsafe and should be used with care.

















// Array bounds handling

// Even with strictNullChecks enabled, by default TypeScript will assume array access will never return undefined (unless undefined is part of the array type).

// The config noUncheckedIndexedAccess can be used to change this behavior.

let array : number[] = [1, 2, 3]
let valueAtIndex = array[0]          // with `noUncheckedIndexedAccess` this has the type `number | undefined`

if (valueAtIndex !== undefined) {
    console.log("Value is:", valueAtIndex); // Safe to use value as a number
} else {
    console.log("Value is undefined"); // Handle the case where value is undefined
}