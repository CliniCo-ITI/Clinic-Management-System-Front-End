import { User } from "./user";
import { Clinc } from "./clinic";

export class Receptionist extends User {
  constructor(_id:string ,
              fname: string ,
              lname: string ,
              email: string ,
              password: string ,
              image: string ,
              age: number ,
              phoneNumber: string ,
              gender: string,
              userType: string,
              public clinicId: string,
              public salary: number,
              public clinic: Clinc,
              public userRef: User,
              ){
    super(_id,fname,lname,email,password,image,age,phoneNumber,gender,userType)
  }
}

