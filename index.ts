let x : string = "this is some text";
let y : boolean = true
export class Sample {
    constructor(){

    }

    public printX():string{
        return x;
    }
}

let val = new Sample();
val.printX();

