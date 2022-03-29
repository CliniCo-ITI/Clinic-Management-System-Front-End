import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicin } from '../../models/medicin';
import { MedicinService } from '../services/medicin.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {

  medicines:Medicin[]|any = [];
  constructor(public medicineSer:MedicinService,public router:Router) { }

  add(){
    this.router.navigate(['/admin/addMedicin']);
  }

  ngOnInit(): void {
    this.medicineSer.getMedicins().subscribe({
      next:data=>{this.medicines=data,console.log(data)}
    })
  }
}
