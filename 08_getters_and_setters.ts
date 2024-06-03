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


const Gunnu = new User("k@k.com", "Gunnu", "123abc")


// Gunnu.deleteToken()          // private method cannot access



export {}