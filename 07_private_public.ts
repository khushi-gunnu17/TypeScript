
// public, private and protected = access modifiers

class User {
    public email : string
    private name : string
    private readonly city : string = 'Jaipur'
    constructor (email : string, name : string) {
        this.email = email
        this.name = name
    }
}

const khushi = new User("khushi@gmail.com", "khushi")
// khushi.city         // private
// khushi.name         // private


// #private in javascript and no private keyword there




// alternative syntax for classes in TS
class NewUser {

    readonly city : string = 'Jaipur'
    constructor (
        public email : string, 
        public name : string,
        private userId : string
    ) {}
}

const Gunnu = new NewUser("k@k.com", "Gunnu", "123abc")


export {}