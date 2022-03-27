import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clinc } from 'src/app/models/clinic';
import { Medicin } from 'src/app/models/medicin';
import { ClinicService } from '../../services/clinic.service';
import { MedicinService } from '../../services/medicin.service';

@Component({
  selector: 'app-add-medicin',
  templateUrl: './add-medicin.component.html',
  styleUrls: ['./add-medicin.component.css']
})
export class AddMedicinComponent implements OnInit {

  clinicRef:string[] = [];
  clinics:Clinc[]|any = [];
  medicine: Medicin = new Medicin("","",new Date,new Date,0,"",this.clinicRef);
  constructor(
    public clincSer:ClinicService,
    public router:Router,
    public medicinSer:MedicinService
    ) { }
  save(){
    this.medicinSer.addMedicin(this.medicine).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
      complete: () => console.log('added'),
    });
    this.router.navigate(['admin/MedicineList']);
  }
  ngOnInit(): void {
    this.getAllClinics();
  }
  getAllClinics() {
    this.clincSer.getCliincs().subscribe({
      next: (res) => {
        this.clinics = res;
        // console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => console.log('get all'),
    });
  }

  add(id:string){
    this.clinicRef.push(id)
  }

}
