let a: number;
let b: string;
let c: boolean = true;
let d: any;
let e: number[] = [1,2,3];
let f: Array<number> = [1,2,3];
let g: any[] = [1,"STR", true];
let h: [string, number, boolean] = ["String", 2,true] //tuple tipinde

const creditPayment = 0;
const havalePayment = 1;
const eftPayment = 2;

enum Payment {kredi = 0, havale = 1, eft = 2, kapidaOdeme = 3};

let kredi = Payment.kredi; // 0
let havale = Payment.havale; // 1
let eft = Payment.eft; // 2
let kapidaOdeme = Payment.kapidaOdeme // 3


