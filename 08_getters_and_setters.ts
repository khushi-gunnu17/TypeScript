class User {

    private _courseCount = 1

    readonly city : string = 'Jaipur'
    constructor (
        public email : string, 
        public name : string,
        private userId : string
    ) {}

    // private methods
    private deleteToken() {
        console.log("Token deleted");
    }

    // getter
    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    // getter for private variable
    get courseCount(): number {
        return this._courseCount
    }

    // setter
    // There are no return types in setter
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error("Course count should be more than 1.")
        }
        this._courseCount = courseNumber
    }   

}




import * as readline from 'readline';

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const Gunnu = new User("k@k.com", "Gunnu", "123abc")

console.log(Gunnu.city);
console.log(Gunnu.email);
console.log(Gunnu.courseCount);
console.log(Gunnu.getAppleEmail);


read.question("Please enter the course count : ", (input) => {
    const courseCount = Number(input)

    if(!isNaN(courseCount)) {
        try {
            Gunnu.courseCount = courseCount
            console.log(`Updated course count: ${Gunnu.courseCount}`);
        } catch (error) {
            console.log((error as Error).message);
        }
    } else {
        console.log("Invalid Input");
    }

    read.close()
})


// try {
//     Gunnu.courseCount = 10
//     console.log(Gunnu.courseCount);
// } catch (error) {
//     console.log((error as Error).message);   
// }



// try {
//     Gunnu.courseCount = 0
//     console.log(Gunnu.courseCount);
// } catch (error) {
//     console.log((error as Error).message);   
// }



// Gunnu.deleteToken()          // private method cannot access



export {}