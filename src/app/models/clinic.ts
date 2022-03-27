import { Medicin } from "./medicin";

export class Clinc{

  constructor(
  public _id:string ,
  public governorate:string ,
  public address:string ,
  public startTime:string ,
  public endTime:string ,
  public medicines:string[],
  ){}
}
