
import ObjectID from "bson-objectid";
import{Schema} from "mongoose";
export class Invoice {

    constructor(public _id:string,public paymentMethod:string,public totalAmount:number,public totalPaid:number,public amountLeft:number){}
}



