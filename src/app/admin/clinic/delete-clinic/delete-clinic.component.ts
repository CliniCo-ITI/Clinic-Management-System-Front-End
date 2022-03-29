import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clinc } from '../../../models/clinic';
import { ClinicService } from '../../services/clinic.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-delete-clinic',
  templateUrl: './delete-clinic.component.html',
  styleUrls: ['./delete-clinic.component.css']
})
export class DeleteClinicComponent implements OnInit {

  constructor(
    public clinicSer: ClinicService,
    public route: ActivatedRoute,
    public router: Router
  ) {}
  clinicId = (this.route.snapshot.paramMap.get('id'));
  clinic:Clinc = new Clinc("","","","","",[]);
  ngOnInit(): void {
    if (this.clinicId != "") {
      this.clinicSer.getClinicById(this.clinicId!).subscribe({
        next: (res) => {
          console.log(res);
          this.clinic = res;
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
  delete() {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this deleted item!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it!',
    }).then((result) => {
      if (result.value) {
        this.deleteCliinc(this.clinicId);
      }
      this.router.navigate(['/admin/list_clinic']);
    });

    // if( confirm("are you sure?") == true){
    //   this.clinicSer.deleteClinic(this.clinicId!).subscribe({
    //     next: (res) => {
    //       console.log(res);
    //     },
    //     error: (err) => {
    //       console.log(err);
    //     },
    //     complete: () => {
    //       console.log('deleted');
    //     },
    //   });
    //   this.router.navigate(['admin/list_clinic']);
    // }else{
    //   this.router.navigate(['admin/list_clinic']);
    // }
  }

  deleteCliinc(id:string|null){
      this.clinicSer.deleteClinic(this.clinicId!).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('deleted');
        },
      });
  }

}
