// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric. Lets start with numeric.



// By default, enums will initialize the first value to 0 and add 1 to each additional value:
enum CardinalDirections {
    North,
    East,
    West,
    South
}

let currentDirection = CardinalDirections.North;

console.log(currentDirection);         // logs 0

let nextDirection = CardinalDirections.West;

console.log(nextDirection);         // logs 2


// throws error as 'North' is not a valid enum
// currentDirection = 'North'  // Error : "North" is not assignable to type 'CardinalDirecions'








// You can set the value of the first numeric enum and have it auto increment from that:

enum CradinalDirectionsSpecified {
    North = 1,
    East,
    West,
    South
}

console.log(CradinalDirectionsSpecified.North);     // logs 1
console.log(CradinalDirectionsSpecified.South);     // logs 4






// You can assign unique number values for each enum value. Then the values will not incremented automatically:

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);









// String enums

// Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.


enum CardinalDirectionsStrings {
    North = 'North',
    East = 'East',
    West = 'West',
    South = 'South'
}

console.log(CardinalDirectionsStrings.North);
console.log(CardinalDirectionsStrings.West);



export {}