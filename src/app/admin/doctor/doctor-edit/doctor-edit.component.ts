import { Component, ElementRef,ViewChild,OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { Doctor } from '../../../models/doctor';
import { Clinc } from '../../../models/clinic';
import { DoctorService } from '../../services/doctor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.css']
})
export class DoctorEditComponent implements OnInit {

  public doctorId:string|any = this.route.snapshot.paramMap.get('docId');
  retrievedDoc: Doctor|any = new Doctor("","","","","","",20,"","","","",100,"","",new Clinc("","","","","",[]),new User("","","","","","",0,"","",""));
  constructor(private docSer:DoctorService,private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.docSer.getDocById(this.doctorId).subscribe({
      next: data => this.retrievedDoc = data
    })
  }

  editDoctor(){
    this.route.params.subscribe(data=>{
      this.doctorId = data['docId'];
      this.docSer.updateDoctor(data['docId'],this.retrievedDoc).subscribe({
        next: res => {console.log("doctor updated");
        this.router.navigate(['/admin/list_doctors'])},
        error: result => {console.log("error ocurred while updating doctor")}
      })
      this.docSer.getDocById(this.doctorId).subscribe(res =>
        {
          console.log(res);
        })
    })
  }

}





