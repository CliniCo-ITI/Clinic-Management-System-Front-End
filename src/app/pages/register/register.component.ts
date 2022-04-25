import { Component, OnInit,ElementRef, Input, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from './../../shared/register.service';
import { Patient } from './../../models/patient';
import { User } from './../../models/user';
import { FormGroup, FormControl, FormBuilder}  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public files: any[] = [];

  @ViewChild('recepimg',{static:false}) recepImg:any;
  // newRecep:Receptionist |any;
  newPat = new Patient("","","","","","",0,"","","",false,"123",new User("","","","","","",0,"","",""));
  // preview: string|any;
  //
  // percentDone: any = 0;
  users = [];
  public patAdded: Patient|any;
  constructor(private registerSer:RegisterService,private router:Router) { }

  ngOnInit(): void {
  }
  onFileChange(event:any){
    this.files = event.target.files;
    console.log(event.target.files[0]);
  }
  onSubmit(){
    var formData: any = new FormData();
    let imgBlob=(this.recepImg as ElementRef).nativeElement.files[0];
    console.log(imgBlob)
    formData.set('image',imgBlob);
    formData.append('fname', this.newPat.fname);
    formData.append('lname', this.newPat.lname);
    formData.append('email', this.newPat.email);
    formData.append('password', this.newPat.password);
    // formData.append('image', this.newRecep.image);
    formData.append('age', this.newPat.age);
    formData.append('phoneNumber', this.newPat.phoneNumber);
    formData.append('gender', this.newPat.gender);
    formData.append('userType',"patient");
    formData.append('hasInsurance',this.newPat.hasInsurance);
    formData.append('insuranceNumber',this.newPat.insuranceNumber);
    this.registerSer.signUp(
      formData
    ).subscribe({
      next:res=>{console.log(res);
        this.router.navigate(['/login'])
      },
      error: result => {console.log("error ocurred while adding registering")}

    })
  }

}








