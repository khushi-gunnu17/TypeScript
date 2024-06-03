// interface TakePhoto {
//     cameraMode : string
//     filter : string
//     burst : number
// }

// interface Story {
//     createStory() : void
// }

// // implements only use for interface
// class Instagram implements TakePhoto {
//     constructor (
//         public cameraMode : string,
//         public filter : string,
//         public burst : number
//     ) {}
// }

// class Youtube implements TakePhoto, Story {
//     constructor (
//         public cameraMode : string,
//         public filter : string,
//         public burst : number,
//         public short : string
//     ) {}

//     createStory(): void {
//         console.log("Story was created.");
//     }
// }









// abstract classes are the blueprint and we cannot create objects from them.
// it is the responsibility of the class who is extending it to create an object from this class.

abstract class TakePhoto {

    constructor (
        public cameraMode : string,
        public filter : string
    ) {}

    // abstract method doesn't need to be provided with definition and can be defined afterwards
    abstract getSepia(): void 

    getReelTime() : number {
        // some complex calculation here and then return
        return 8
    }
}

class Instagram extends TakePhoto {
    constructor (
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        // to access variables from the parent class, super is used
        super(cameraMode, filter)
    }


    getSepia(): void {
        console.log("Sepia");
    }
}

const khushi = new Instagram("test", "test", 123)

khushi.getReelTime()








export {}