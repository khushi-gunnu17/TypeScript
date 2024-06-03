// interface is loosely like a class
interface User {
    readonly dbId : number
    username : string
    email : string
    userId : number
    googleId ? : string
    // startTrial : () => string
    startTrial() : string
    getCoupon(couponName : string, value : number) : number
}


// reopening of the interface
interface User {
    githubToken? : string
}


interface Admin extends User {
    role : "admin" | "ta" | "learner"
}


const khushi: Admin = {
    dbId : 22, 
    username : "gunnu", 
    email : "khushi@k.com", 
    userId : 221133, 
    githubToken : "github",
    role : "admin",
    startTrial : () => {
        return `trial started`
    },
    getCoupon: (name : 'khushi123', off : 15) => {
        return off
    }
}



export {}