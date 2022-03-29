import { Clinc } from "./clinic";

export class Medicin{
  constructor(
    public _id:string ,
    public name :string,
    public productionDate:Date,
    public expirationDate:Date,
    public price:Number,
    public description:string,
    public clinics:string[]
    ){}

}
