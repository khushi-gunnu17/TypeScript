
// typeof = type guard
function detectType(val : string | number )  {
    if (typeof val === "string") {
        return val.toLowerCase()
    }
    return val +  3
}



function provideId (id : null | string) {
    if (!id) {
        console.log("Please provide an id");
        return 
    }

    id.toLowerCase()
}






// example from documentation
function printAll(strs: string | string[] | null) {
    // !!!!!!!!!!!!!!!!
    //  DON'T DO THIS!
    //   KEEP READING
    // !!!!!!!!!!!!!!!!
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}






// instanceof
function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());             
    } 
    else {
        console.log(x.toUpperCase());
    }
}





// using type predicate
type Fish = {
    swim: () => void
}

type Bird = {
    fly: () => void
}

// instead of returning it as a boolean, we can type cast it to pet is Fish
function isFish (pet : Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined 
}

function getfood (pet : Fish | Bird) {
    if (isFish(pet)) {
        pet 
        return "fish food"
    } else {
        pet
        return "Bird food"
    }
}







// Discrimated unions
interface Circle {
    kind : "circle"
    radius : number
}

interface Square {
    kind : "square"
    side : number
}

interface Rectangle {
    kind : "rectangle"
    length : number
    width : number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape : Shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    }
    // return shape.side * shape.side
}




// the never type is supposed to be never checking
function getArea(shape : Shape) {
    switch(shape.kind) {
        case "circle" : return Math.PI * shape.radius ** 2;
        case "square" : return shape.side * shape.side;
        case "rectangle" : return shape.length * shape.width;

        default : 
            const _defaultForShape : never = shape
            return _defaultForShape
    }
}



export {}