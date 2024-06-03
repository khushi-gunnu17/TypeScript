const user : (string | number | boolean)[] = [12, 'khushi', 'gunnu', 1, false]

// order of the array matters in tuple
let newUser : [string, number, boolean]
newUser = ['khushi', 123, true]
// newUser = [true, 123, 'khushi']





let rgb : [number, number, number] = [255, 255, 255]


type User = [number, string]

let user2 : User = [112, "example@google.com"]

user2[1] = 'khushi@google.com'      // values can change

// user2.push(true)         // it is not taking the boolean type now, but it can take other given types and there is no type safety or checking after the specified range

export {}