// these features are only be available in 5.x+


// Template Literal Types
// Template Literal Types now allows us to create more precise types using template literals. We can define custom types that depend on the actual values of strings at compile time.

type Color = 'red' | 'green' | 'blue'

type HexColor<T extends Color> = `#${string}`

let myColor : HexColor<'blue'> = "#0000FF"

console.log(myColor);









// Index Signature Labels
// Index Signature Labels allows us to label index signatures using computed property names. It helps in providing more descriptive type information when working with dynamic objects.

// type DynamicObject = {[key : string as `dynamic_${string}`] : string}

// let obj : DynamicObject = {dynamic_key : 'value'}

// console.log(obj);


// still showing errors after configuring the latest version on the system