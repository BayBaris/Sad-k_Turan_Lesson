export default class {
    constructor(){
        this.PI = 3.1428
    }

    sum(...numbers) {
        return numbers.reduce((number, total) => total + number);
    }

    multiple(...numbers) {
        return numbers.reduce((number, total) => total * number);
    }
}
