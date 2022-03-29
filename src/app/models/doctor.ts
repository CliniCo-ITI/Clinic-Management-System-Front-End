import { User } from "./user";
import { Clinic } from "./clinic";

export class Doctor extends User {
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
              public vezeeta: number,
              public ppl: string,
              public specialization: string,
              public clinic: Clinic,
              public userRef: User,
              ){
    super(_id,fname,lname,email,password,image,age,phoneNumber,gender,userType)
  }
}
