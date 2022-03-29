import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clinc } from '../../../models/clinic';
import { ClinicService } from '../../services/clinic.service';

@Component({
  selector: 'app-clinic-details',
  templateUrl: './clinic-details.component.html',
  styleUrls: ['./clinic-details.component.css']
})
export class ClinicDetailsComponent implements OnInit {

  constructor(
    public clincSer: ClinicService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  clincId = (this.route.snapshot.paramMap.get('id'));
  showClinc: Clinc = new Clinc("","","","","",[]);
  ngOnInit(): void {
    if (this.clincId != "") {
      this.clincSer.getClinicById(this.clincId!).subscribe({
        next: (res) => {
          console.log(res);
          this.showClinc = res;
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
  back() {
    this.router.navigate(['admin/list_clinic']);
  }
}
