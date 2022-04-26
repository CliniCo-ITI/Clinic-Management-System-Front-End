export class Invoice {
    constructor(public _id:string,public paymentMethod:string,public totalAmount:number,public totalPaid:number,public amountLeft:number){}
}
