import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clinc } from 'src/app/models/clinic';
import { Medicin } from 'src/app/models/medicin';
import { MedicinService } from '../../services/medicin.service';
import Swal  from 'sweetalert2';
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

    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this deleted item!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it!',
    }).then((result) => {
      if (result.value) {
        this.deleteCliinc(this.medicinId);
      }
      this.router.navigate(['admin//MedicineList']);
    });

  }

  deleteCliinc(id:string|null){
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
  }
  // delete() {
  //   if( confirm("are you sure?") == true){
  //     this.medicinSer.deleteMedicin(this.medicinId!).subscribe({
  //       next: (res) => {
  //         console.log(res);
  //       },
  //       error: (err) => {
  //         console.log(err);
  //       },
  //       complete: () => {
  //         console.log('deleted');
  //       },
  //     });
  //     this.router.navigate(['admin//MedicineList']);
  //   }else{
  //     this.router.navigate(['admin//MedicineList']);
  //   }
  // }
}
