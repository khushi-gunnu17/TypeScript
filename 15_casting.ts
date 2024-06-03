// There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library.
// Casting is the process of overriding a type.


// Casting with as
let x : unknown = 'hello'
console.log((x as string).length);



// console.log((4 as string).length); // Error: Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.




// Casting with <>
let m : unknown = 'hello'
console.log((<string>m).length);
// This type of casting will not work with TSX, such as when working on React files.






// To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.

let y = 'hello'
// console.log(((y as unknown) as number).length);     // y is not actually a number so this will return undefined
