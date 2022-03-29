import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clinc } from 'src/app/models/clinic';
import { Medicin } from 'src/app/models/medicin';
import { MedicinService } from '../../services/medicin.service';

@Component({
  selector: 'app-medicine-details',
  templateUrl: './medicine-details.component.html',
  styleUrls: ['./medicine-details.component.css']
})
export class MedicineDetailsComponent implements OnInit {

  constructor(
    public medicinSer: MedicinService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  MedicinId = (this.route.snapshot.paramMap.get('id'));
  showMedicin: Medicin = new Medicin("","",new Date,new Date,0,"",[]);
  ngOnInit(): void {
    if (this.MedicinId != "") {
      this.medicinSer.getMedicinById(this.MedicinId!).subscribe({
        next: (res) => {
          console.log(res);
          this.showMedicin = res;
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
    this.router.navigate(['admin/MedicineList']);
  }

}
