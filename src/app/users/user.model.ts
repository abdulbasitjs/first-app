export class User {
    constructor(public $key: string,
            public id: number,
            public firstname: string,
            public lastname: string,
            public email: string,
            public gender: string,
            public country: string) {
    }
}
