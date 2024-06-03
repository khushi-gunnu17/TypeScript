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










class NamedValue<T> {                       // for default value : <T = string>
    private _value : T | undefined

    constructor (private name : string) {}

    public setValue(value : T) {
        this._value = value
    }

    public getValue() : T | undefined {
        return this._value
    }

    public toString() : string {
        return `${this.name} : ${this._value}`
    }
}


let value = new NamedValue<number>('myNumber')
value.setValue(10)
console.log(value.toString())       // myNumber : 10











type Wrapped<T> = {value : T}
const wrappedValue : Wrapped<number> = {value : 10}




export {}