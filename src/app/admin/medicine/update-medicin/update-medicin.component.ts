import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicin } from '../../../models/medicin';
import { MedicinService } from '../../services/medicin.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-update-medicin',
  templateUrl: './update-medicin.component.html',
  styleUrls: ['./update-medicin.component.css']
})
export class UpdateMedicinComponent implements OnInit {

  medicinId = (this.route.snapshot.paramMap.get('id'));
  updatMedicin: Medicin = new Medicin("","",new Date,new Date,0,"",[]);
  constructor(
    public medicinSer: MedicinService,
    public route: ActivatedRoute,
    public router: Router,
    public ar:ActivatedRoute
  ) {}
  // update() {
  //   if( confirm("are you sure?") == true){
  //     this.ar.params.subscribe(data=>{
  //       console.log(data['id']);
  //       this.medicinSer.editMedicin(data['id'],this.updatMedicin).subscribe({
  //             next: (res) => {
  //               console.log(res);
  //               this.medicinId = "";
  //             },
  //             error: (err) => {
  //               console.log(err);
  //             },
  //             complete: () => {
  //               console.log('update one');
  //             },
  //           });
  //       this.router.navigate(['admin/MedicineList']);
  //       // console.log(this.updateClinic)
  //     })
  //   }else{
  //     this.router.navigate(['admin/MedicineList']);
  //   }

  // }
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
        this.updated(this.medicinId);
      }
      this.router.navigate(['/admin/MedicineList']);
    });

  }
  updated(id:string|null){


    this.ar.params.subscribe(data=>{
      console.log(data['id']);
      this.medicinSer.editMedicin(data['id'],this.updatMedicin).subscribe({
            next: (res) => {
              console.log(res);
              this.medicinId = "";
            },
            error: (err) => {
              console.log(err);
            },
            complete: () => {
              console.log('update one');
            },
          });
        this.router.navigate(['/admin/list_clinic']);
        // console.log(this.updateClinic)
      })
  }
  ngOnInit(): void {
    if (this.medicinId != "") {
      this.medicinSer.getMedicinById(this.medicinId!).subscribe({
        next: (res) => {
          console.log(res);
          this.updatMedicin = res;
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
