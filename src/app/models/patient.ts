import { User } from "./user";

export class Patient extends User {
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
              public hasInsurance: boolean,
              public insuranceNumber: string,
              public userRef: User,
              ){
    super(_id,fname,lname,email,password,image,age,phoneNumber,gender,userType)
  }
}

