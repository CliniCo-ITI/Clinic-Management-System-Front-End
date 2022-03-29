import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Clinc } from '../../../models/clinic';
import { ClinicService } from '../../services/clinic.service';

@Component({
  selector: 'app-clinic-list',
  templateUrl: './clinic-list.component.html',
  styleUrls: ['./clinic-list.component.css']
})
export class ClinicListComponent implements OnInit {

  clincics: any[] = [];
  constructor(public clincSer:ClinicService,public router:Router) { }

  add(){
    this.router.navigate(['/admin/add_clinic']);
  }

  ngOnInit(): void {
    this.clincSer.getCliincs().subscribe({
      next:data=>{this.clincics=data,console.log(data)}
    })
  }



}
