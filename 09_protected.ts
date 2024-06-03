class User {

    // protected means that the variable or method can be acccessible by the inherited class but not outside the class
    protected _courseCount = 1

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

}


// Inheritance
class SubUser extends User {

    isFamily: boolean = true

    changeCourseCount() {
        this._courseCount + 1
    }

}


const Gunnu = new User("k@k.com", "Gunnu", "123abc")



export {}