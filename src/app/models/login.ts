import { USER_LOGIN_TYPE } from "./user.login";

// export class LOGIN_TYPE extends USER_LOGIN_TYPE{
//   constructor(
//     email:string,
//     fname: string,
//     id: string,
//     lname: string,
//     userType:string,
//     public token:string,
//     public user:USER_LOGIN_TYPE
//   ){
//     super(id,fname,lname,email,userType)
//   }

// }
export interface LOGIN_TYPE{
   token:string,
   user:USER_LOGIN_TYPE
}
