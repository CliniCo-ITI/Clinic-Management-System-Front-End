import { Component, OnInit, ElementRef,ViewChild,Input } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { ClinicService } from '../../services/clinic.service';
import { Doctor } from '../../../models/doctor';
import { User } from '../../../models/user';
import { Clinc } from '../../../models/clinic';
import { FormGroup, FormControl, FormBuilder}  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ClinicAddComponent } from '../../clinic/clinic-add/clinic-add.component';
import { HttpClient } from '@angular/common/http';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-add',
  templateUrl: './doctor-add.component.html',
  styleUrls: ['./doctor-add.component.css']
})
export class DoctorAddComponent implements OnInit {
  @ViewChild('doctorimg',{static:false}) doctorImg:any;
  @ViewChild('ppl',{static:false}) doctorPpl:any;

  public newDoc = new Doctor("","","","","","",20,"","","","",100,"","",new Clinc("","","","","",[]),new User("","","","","","",0,"","",""));

  users = [];
  public docAdded: Doctor|any;
  public clinics:Clinc[]|any;
  constructor(private docSer:DoctorService,private clinicSer:ClinicService,private router: Router) { }

  ngOnInit(): void {
    this.clinicSer.getCliincs().subscribe({
      next:data =>{this.clinics = data; console.log(this.clinics) }
    })
  }

  onSubmit(){
    var formData: any = new FormData();
    let imgBlob=(this.doctorImg as ElementRef).nativeElement.files[0];
    let pplBlob=(this.doctorPpl as ElementRef).nativeElement.files[0];

    console.log(imgBlob);
    console.log(pplBlob);
    formData.set('image',imgBlob);
    formData.append('ppl',pplBlob);
    console.log(formData);
    formData.append('fname', this.newDoc.fname);
    formData.append('lname', this.newDoc.lname);
    formData.append('email', this.newDoc.email);
    formData.append('password', this.newDoc.password);
    // formData.append('image', this.newRecep.image);
    formData.append('age', this.newDoc.age);
    formData.append('phoneNumber', this.newDoc.phoneNumber);
    formData.append('gender', this.newDoc.gender);
    formData.append('userType',this.newDoc.userType);

    formData.append('vezeeta',this.newDoc.vezeeta);
    formData.append('specialization',this.newDoc.specialization);
    formData.append('clinic',this.newDoc.clinicId);
    this.docSer.addDoctor(
      formData
    ).subscribe({
      next:res=>{console.log(res);
      this.router.navigate(['/admin/list_doctors'])},
      error: result => {console.log("error ocurred while adding doctor")}

    })
  }

}


