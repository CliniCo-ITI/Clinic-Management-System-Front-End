import { Clinc } from "./clinic";
import { User } from "./user";

export class Doctor_Type extends User {
  ppl:string ="";
  vezeeta:number = 0;
  clinic:  Clinc = new Clinc("","","","","",[]) ;
  specialization:string = ""
  userRef!:User ;
}
