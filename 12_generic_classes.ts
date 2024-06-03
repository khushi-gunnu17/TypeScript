interface database {
    connection : string
    username : string
    password : string
}

function Identity <Type, U extends database> (valOne : Type, valTwo : U): object {
    return {
        valOne,
        valTwo
    }
}


Identity(3, {connection : "test", username :"test", password :"test"})








interface Quiz {
    name : string
    type : string
}

interface Course {
    name : string
    author : string
    subject : string
}

// generic class
class Sellable <Type> {
    public cart : Type[] = []

    addToCart(products : Type) {
        this.cart.push(products)
    }
}


export {}