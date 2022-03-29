import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Receptionist } from 'src/app/models/receptionist';
import { Clinc } from 'src/app/models/clinic';
import { RecepService } from '../../services/recep.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-receptionist-edit',
  templateUrl: './receptionist-edit.component.html',
  styleUrls: ['./receptionist-edit.component.css'],
  // providers: [RecepService]

})
export class ReceptionistEditComponent implements OnInit {
  public recepId:string|any = this.route.snapshot.paramMap.get('recepId');
  retrievedUser: Receptionist|any = new Receptionist("","","","","","",0,"","","","",3000,new Clinc("","","","","",[]),new User("","","","","","",0,"","",""));
  constructor(private recepSer:RecepService,private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.recepSer.getRecepById(this.recepId).subscribe({
      next: data => this.retrievedUser = data
    })
  }
  editRecep(){
    this.route.params.subscribe(data=>{
      this.recepId = data['recepId'];
      this.recepSer.updateRecep(data['recepId'],this.retrievedUser).subscribe({
        next: res => {console.log("receptionist updated");
        this.router.navigate(['/admin/list_receptionist'])},
        error: result => {console.log("error ocurred while updating")}
      })
    })
  }


}
