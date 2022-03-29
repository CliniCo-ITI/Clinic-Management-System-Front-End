import { Component, OnInit } from '@angular/core';
import { RecepService } from '../../services/recep.service';
import { Receptionist} from '../../../models/receptionist';

@Component({
  selector: 'app-receptionist-list',
  templateUrl: './receptionist-list.component.html',
  styleUrls: ['./receptionist-list.component.css'],
  providers: []

})
export class ReceptionistListComponent implements OnInit {
  receps: Receptionist[] |any = [];
  retrievedRecep: Receptionist|any;
  constructor(public recepService:RecepService) { }
  ngOnInit(): void {
    this.recepService.getReceptionists().subscribe({
      next:data => {this.receps = data;console.log(this.receps)}
    })
  }
  deleteRecep(_id:string){
    this.recepService.deleteReceptionist(_id).subscribe({
      next:response => {console.log(response);}
    })
  }

}
