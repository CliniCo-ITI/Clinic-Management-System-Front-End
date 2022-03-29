import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clinc } from '../../../models/clinic';
import { Medicin } from '../../../models/medicin';
import { ClinicService } from '../../services/clinic.service';
import { MedicinService } from '../../services/medicin.service';

@Component({
  selector: 'app-clinic-add',
  templateUrl: './clinic-add.component.html',
  styleUrls: ['./clinic-add.component.css']
})
export class ClinicAddComponent implements OnInit {

  medicinsRef:string[] = [];
  medicins:Medicin[]|any = [];
  clinc: Clinc = new Clinc("","","","","",this.medicinsRef);
  constructor(
    public clincSer:ClinicService,
    public router:Router,
    public medicinSer:MedicinService
    ) { }
  save(){
    this.clincSer.addClinc(this.clinc).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
      complete: () => console.log('added'),
    });
    this.router.navigate(['admin/list_clinic']);
  }
  ngOnInit(): void {
    this.getAllMedicins();
  }
  getAllMedicins() {
    this.medicinSer.getMedicins().subscribe({
      next: (res) => {
        this.medicins = res;
        // console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => console.log('get all'),
    });
  }

  add(id:string){
    this.medicinsRef.push(id)
  }
}
