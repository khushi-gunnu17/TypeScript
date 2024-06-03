let score : number | string = 33

score = "khushi123"



type User = {
    name : string
    id : number
}

type Admin = {
    username : string
    id : number
}

let khushi: User | Admin = {name : "Khushi", id : 100}

khushi = {
    username : "Khushi-gunnu",
    id : 100
}






function getDBId(id : number | string) {
    // making some api calls above this code down below
    console.log(`DB id is : ${id}`);
}

getDBId(2)
getDBId("234")


function getNewDBId(id : number | string) {
    if (typeof id === "string") {
        id.toLowerCase()

    }
}







// array

const data : number[] = [1, 2, 3, 4]
const data2 : string[] = ["1", "2"]
const data3 : (string | number | boolean)[] = ["1", "2", 3, true]


// literal type of assignment
let pi : 3.14 = 3.14
// pi = 3.15        // cannot do this


let seatAllotment : "aisle" | "middle" | "window"

// seatAllotment = "crew"




export {}