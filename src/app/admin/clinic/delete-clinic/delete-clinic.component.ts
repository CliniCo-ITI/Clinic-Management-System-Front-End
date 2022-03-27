import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clinc } from 'src/app/models/clinic';
import { ClinicService } from '../../services/clinic.service';


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
    if( confirm("are you sure?") == true){
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
      this.router.navigate(['admin/list_clinic']);
    }else{
      this.router.navigate(['admin/list_clinic']);
    }
  }


}
