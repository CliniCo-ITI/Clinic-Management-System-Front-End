import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clinc } from 'src/app/models/clinic';
import { Medicin } from 'src/app/models/medicin';
import { MedicinService } from '../../services/medicin.service';

@Component({
  selector: 'app-delete-medicin',
  templateUrl: './delete-medicin.component.html',
  styleUrls: ['./delete-medicin.component.css']
})
export class DeleteMedicinComponent implements OnInit {

  constructor(
    public medicinSer: MedicinService,
    public route: ActivatedRoute,
    public router: Router
  ) {}
  medicinId = (this.route.snapshot.paramMap.get('id'));
  medicin:Medicin = new Medicin("","",new Date,new Date,0,"",[]);
  ngOnInit(): void {
    if (this.medicinId != "") {
      this.medicinSer.getMedicinById(this.medicinId!).subscribe({
        next: (res) => {
          console.log(res);
          this.medicin = res;
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
      this.medicinSer.deleteMedicin(this.medicinId!).subscribe({
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
      this.router.navigate(['admin//MedicineList']);
    }else{
      this.router.navigate(['admin//MedicineList']);
    }
  }
}
