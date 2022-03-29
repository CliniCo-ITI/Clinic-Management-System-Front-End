import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clinc } from 'src/app/models/clinic';
import { ClinicService } from '../../services/clinic.service';
import Swal from "sweetalert2"
@Component({
  selector: 'app-clinic-edit',
  templateUrl: './clinic-edit.component.html',
  styleUrls: ['./clinic-edit.component.css']
})
export class ClinicEditComponent implements OnInit {
  clinicId = (this.route.snapshot.paramMap.get('id'));
  updateClinic: Clinc = new Clinc("","","","","",[]);
  constructor(
    public clincSer: ClinicService,
    public route: ActivatedRoute,
    public router: Router,
    public ar:ActivatedRoute
  ) {}
  update() {


    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this updated item!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, update it!',
      cancelButtonText: 'No, keep it!',
    }).then((result) => {
      if (result.value) {
        this.updated(this.clinicId);
      }
      this.router.navigate(['/admin/list_clinic']);
    });

  }
  updated(id:string|null){


      this.ar.params.subscribe(data=>{
        console.log(data['id']);
        this.clincSer.editClinic(data['id'],this.updateClinic).subscribe({
              next: (res) => {
                console.log(res);
                this.clinicId = "";
              },
              error: (err) => {
                console.log(err);
              },
              complete: () => {
                console.log('update one');
              },
            });
        this.router.navigate(['admin/list_clinic']);
        // console.log(this.updateClinic)
      })
  }
  ngOnInit(): void {
    if (this.clinicId != "") {
      this.clincSer.getClinicById(this.clinicId!).subscribe({
        next: (res) => {
          console.log(res);
          this.updateClinic = res;
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('get one');
        },
      });
    }
  }
}
